import { createFileRoute } from "@tanstack/react-router";
import CartLayout from "@/components/store/CartLayout";

export const Route = createFileRoute("/cart")({ component: CartLayout });
