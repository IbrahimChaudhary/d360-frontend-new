"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import Image from "next/image";

interface DownloadModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function DownloadModal({ open, onOpenChange }: DownloadModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-[350px] text-center p-6 rounded-2xl">
        <DialogHeader>
          <DialogTitle className="text-lg font-bold mb-2 text-center">GET D360 BANK APP</DialogTitle>
        </DialogHeader>
        <Image
          src="/home/qr.jpg"
          alt="QR Code"
          width={180}
          height={180}
          className="mx-auto"
        />
      </DialogContent>
    </Dialog>
  );
}