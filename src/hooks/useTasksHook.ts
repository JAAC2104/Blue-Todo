import { useEffect, useMemo, useRef, useState } from "react";
import type { Todo } from "../types/Todo";
import {addDoc,collection,deleteDoc,doc,onSnapshot,orderBy,query,serverTimestamp,updateDoc,FirestoreError,} from "firebase/firestore";
import { database } from "../firebase/firebase";
import { useAuth } from "../contexts/AuthContext";

function tasksCollectionRef(uid: string) {
  return collection(doc(database, "users", uid), "tasks");
}

export default function useTasksHook() {
  const { user } = useAuth();
  const [tasks, setTasks] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const unsubRef = useRef<() => void>(null);

  useEffect(() => {
    if (!user?.uid) {
      setTasks([]);
      setLoading(false);
      if (unsubRef.current) unsubRef.current();
      return;
    }

    setLoading(true);
    const q = query(tasksCollectionRef(user.uid), orderBy("createdAt", "asc"));

    const unsub = onSnapshot(
        q,
        (snap) => {
            const next: Todo[] = snap.docs.map(d => {
    const data = d.data() as any;
    return {
        id: d.id,
        text: data.text ?? "",
        status: data.status ?? "todo",
        timestamp: (data.createdAt?.toMillis?.() ? new Date(data.createdAt.toMillis()).toLocaleString() : new Date().toLocaleString())
    };
    });


        setTasks(next);
        setLoading(false);
        setError(null);
      },
      (err: FirestoreError) => {
        setError(err.message);
        setLoading(false);
      }
    );

    unsubRef.current = unsub;
    return () => unsub();
  }, [user?.uid]);

  const addTask = async (text: string) => {
  if (!user?.uid) throw new Error("No authenticated user");

  const temp: Todo = {
    id: `temp_${crypto.randomUUID()}`,
    text,
    status: "todo",
    timestamp: new Date().toLocaleString(),
  };
  setTasks((p) => [...p, temp]);

  try {
    await addDoc(tasksCollectionRef(user.uid), {
      text,
      status: "todo",
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    });
  } catch (e) {
    setTasks((p) => p.filter((t) => t.id !== temp.id));
    throw e;
  }
};

  const updateTask = async (
    id: string,
    patch: Partial<Omit<Todo, "id">>
  ) => {
    if (!user?.uid) throw new Error("No authenticated user");

    const prev = tasks;
    setTasks((curr) =>
      curr.map((t) =>
        t.id === id ? { ...t, ...patch, updatedAt: Date.now() } : t
      )
    );

    try {
      await updateDoc(doc(tasksCollectionRef(user.uid), id), {
        ...patch,
        updatedAt: serverTimestamp(),
      });
    } catch (e: any) {
      setTasks(prev);
      setError(e.message ?? "Failed to update task");
      throw e;
    }
  };

  const toggleDone = async (id: string) => {
    const target = tasks.find((t) => t.id === id);
    if (!target) return;
    await updateTask(id, { status: "completed" });
  };

  const deleteTask = async (id: string) => {
    if (!user?.uid) throw new Error("No authenticated user");

    const prev = tasks;
    setTasks((curr) => curr.filter((t) => t.id !== id));

    try {
      await deleteDoc(doc(tasksCollectionRef(user.uid), id));
    } catch (e: any) {
      setTasks(prev);
      setError(e.message ?? "Failed to delete task");
      throw e;
    }
  };

  const value = useMemo(
    () => ({ tasks, loading, error, addTask, updateTask, toggleDone, deleteTask }),
    [tasks, loading, error]
  );

  return value;
}
