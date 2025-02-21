"use client";

import Counter from "@/components/counter/counter";
import Counter2 from "@/components/counter/counter2";
import ReduxProvider from "@/components/provider";

export default function CounterPage() {
  return (
    <ReduxProvider>
      <Counter />
      <Counter2 />
    </ReduxProvider>
  );
}
