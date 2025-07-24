"use client";
import { useEffect, useRef } from "react";
import { io, type Socket } from "socket.io-client";

let socket: Socket | null = null;

function getSocket() {
  if (!socket) {
    socket = io(process.env.NEXT_PUBLIC_SOCKET_URL, { autoConnect: false });
  }
  return socket;
}
export function useSocket<Event>(
  event: string,
  handler: (data: Event) => void
) {
  const saved = useRef(handler);
  // update the handler if it changes
  saved.current = handler;

  // implementation from: https://socket.io/how-to/use-with-nextjs
  useEffect(() => {
    const ws = getSocket();
    const listener = (data: Event) => saved.current(data);

    ws.on(event, listener);
    if (!ws.connected) {
      ws.connect();
    }

    // cleanup side-effects
    return () => {
      ws.off(event, listener);
      // if no more listeners, disconnect
      if (ws.listenersAny().length === 0) ws.disconnect();
    };
  }, [event]);
}
