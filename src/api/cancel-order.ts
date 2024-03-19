import { api } from "@/lib/axios";

interface CancelOrderPrams {
  orderId: string;
}

export async function cancelOrder({ orderId }: CancelOrderPrams) {
  await api.patch<CancelOrderPrams>(`/orders/${orderId}/cancel`);
}
