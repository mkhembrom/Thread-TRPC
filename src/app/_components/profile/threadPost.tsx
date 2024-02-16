"use client";
import Image from "next/image";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Button, buttonVariants } from "~/components/ui/button";
import { useTheme } from "next-themes";
import { useClientOnly } from "~/lib/clientOnly";
import { cn } from "~/lib/utils";
import PostMoreButton from "../post/postMoreButton";
import { Icons } from "../icons";
import Post from "../post/post";

export default function ThreadPost() {

  const { isClient } = useClientOnly();

  if (!isClient) return null;
  return <Post />;
}
