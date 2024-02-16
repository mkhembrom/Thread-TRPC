"use client";
import { useEffect, useState } from "react";

export const useClientOnly = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, [isClient]);

  return {
    isClient,
  };
};
