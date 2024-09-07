"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import Link from "next/link";

export function ModalSIH() {
  return (
    <AlertDialog defaultOpen={true}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            SIH Internal Hackathon at NIT Agartala is being hosted by DCC along
            with GymKhana and Board of Technical Community
          </AlertDialogTitle>
          <AlertDialogDescription>
            If you have a team ready, then go register now!
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Ok</AlertDialogCancel>
          <AlertDialogAction>
            <Link
              href="https://sih.dccnita.in"
              rel="noreferrer"
              target="_blank"
            >
              Visit Now
            </Link>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
