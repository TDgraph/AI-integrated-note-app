import { Button } from '@/components/ui/button';
import { UserButton } from '@clerk/nextjs';
import { Separator } from "@/components/ui/separator";
import { ArrowLeft } from 'lucide-react';
// import CreateNoteDialog from '@/components/CreateNoteDialog';
import Link from "next/link";
import React from 'react'

type Props = {}

const dashboardPage = (_props: Props) => {
  return (
    <div className="grainy min-h-screen">
      <div className="max-w-7x1 mx-auto p-10">
        <div className="h-14"></div>
        <div className="flex justify-between items-center md:flex-row flex-col">
          <div className="flex" items-center>
            <Link href="/">
              <Button className="bg-green-600" size="sm">
                <ArrowLeft className="mr-1 w-4 h4" />
                Back
              </Button>
            </Link>

            <div className="w-4"></div>
            <h1 className='text-3x1 font-bold text-gray-900'>My Note</h1>
            <div className="w-4"></div>
            <UserButton />
          </div>
        </div>

        {/* <div className="h-8"></div> */}

        <Separator />
        <div className="h-8"></div>
        <div className="text-center">
          <h2 className="text-xl text-gray-500">You have no notes yet!</h2>
        </div>

        {/* this displays all notes */}
        <div className="grid sm:grid-cols-3 md:grid-cols-5 grid-cols-1 gap-3"></div>
          <CreateNoteDialog />

      </div>
    </div>
  )
}

export default dashboardPage;