type OrderStatus =
  | "pending"
  | "canceled"
  | "processing"
  | "delivering"
  | "delivered";

interface OrderStatusProps {
  status: OrderStatus;
}

const orderStatusMap: Record<OrderStatus, string> = {
  pending: "Pendente",
  canceled: "Cancelado",
  processing: "Processando",
  delivering: "Entregando",
  delivered: "Entregue",
};

export const OrderStatus = ({ status }: OrderStatusProps) => {
  return (
    <div className="flex items-center gap-2">
      {status === "pending" && (
        <span className="h-2 w-2 bg-stone-500 rounded-full" />
      )}
      {status === "canceled" && (
        <span className="h-2 w-2 bg-rose-500 rounded-full" />
      )}
      {["processing", "delivering"].includes(status) && (
        <span className="h-2 w-2 bg-amber-500 rounded-full" />
      )}
      {status === "delivered" && (
        <span className="h-2 w-2 bg-emerald-500 rounded-full" />
      )}
      <span className="font-medium text-muted-foreground">
        {orderStatusMap[status]}
      </span>
    </div>
  );
};
