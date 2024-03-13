import { DialogHeader } from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@radix-ui/react-dialog";
import { X } from "lucide-react";

export interface OrderDetailsProps {}

export function OrderDetails() {
  return (
    <DialogContent className="bg-background rounded-lg p-6 m-4 max-w-xl w-full relative">
      <DialogHeader>
        <DialogTitle className="text-lg font-bold">
          Pedido: 2163c2134bh32
        </DialogTitle>
        <DialogDescription className="text-slate-400 pb-2">
          Detalhes do pedido
        </DialogDescription>

        <DialogClose asChild>
          <button className="absolute top-0 right-0 m-2 p-2 hover:text-slate-400">
            <X className="h-6 w-6" />
          </button>
        </DialogClose>
      </DialogHeader>

      <div className="space-y-6">
        <Table>
          <TableBody>
            <TableRow>
              <TableCell className="text-muted-foreground">Status</TableCell>
              <TableCell className="flex justify-end">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-slate-400" />
                  <span className="font-medium text-muted-foreground">
                    Pendente
                  </span>
                </div>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground">Cliente</TableCell>
              <TableCell className="flex justify-end">
                Joao Claudio Mendonca Pansani
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground">Telefone</TableCell>
              <TableCell className="flex justify-end">
                (62) 99999-9999
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground">E-mail</TableCell>
              <TableCell className="flex justify-end">
                pansanijoaomendonca@gmail.com
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground">
                Realizado há
              </TableCell>
              <TableCell className="flex justify-end">há 15 minutos</TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Produto</TableHead>
              <TableHead className="text-right">Qtd.</TableHead>
              <TableHead className="text-right">Preço</TableHead>
              <TableHead className="text-right">Subtotal</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            <TableCell>Pizza Pepperoni Familia</TableCell>
            <TableCell className="text-right">2</TableCell>
            <TableCell className="text-right">R$ 59,90</TableCell>
            <TableCell className="text-right">R$ 119,90</TableCell>
          </TableBody>

          <TableBody>
            <TableCell>Pizza Calabresa Familia</TableCell>
            <TableCell className="text-right">2</TableCell>
            <TableCell className="text-right">R$ 49,90</TableCell>
            <TableCell className="text-right">R$ 98,90</TableCell>
          </TableBody>

          <TableFooter>
            <TableRow>
              <TableCell colSpan={3}>Total do pedido</TableCell>
              <TableCell className="text-right">R$ 218,80</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </DialogContent>
  );
}
