"use client"
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { ArrowLeft, Copy, Folder as FolderIcon, ImageIcon, MoreVertical, Plus, Upload } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

import { db, storage } from '@/firebase'
import { Folder, Photo } from '@/types'
import { collection, doc, getDoc, getDocs, onSnapshot, orderBy, query, where } from 'firebase/firestore'
import FolderComp from '@/components/FolderComp'
import { useParams } from 'next/navigation'
import CreateNewFolder from '@/components/CreateNewFolder'
import Loading from '@/components/Loading'
import { Input } from 'postcss'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'
import UploadImage from '@/components/UploadImage'
import ImageComp from '@/components/ImageComp'

type Props = {
}

const Page = (props: Props) => {

    const params = useParams()


    const [folders, setFolders] = React.useState<Folder[]>([])
    const [photos, setPhotos] = React.useState<Photo[]>([])
    const [folder, setFolder] = React.useState<Folder>()
    const [loading, setLoading] = React.useState(true)

  React.useEffect( () => {
      const q = query(collection(db, "folders"), where("parent", "==", params.folder),orderBy("createdAt","desc"));
      onSnapshot(q,(querySnapshot)=>{
      let fs: Folder[] = []
      querySnapshot.forEach((doc) => {
        fs.push({
          id: doc.id,
          ...doc.data()
        }as Folder)
      });
      setFolders(fs)
      setLoading(false)
      });

      const q2 = query(collection(db, "photos") ,orderBy("createdAt","desc"), where("parent", "==", params.folder));
      onSnapshot(q2,(querySnapshot2)=>{
        let phts: Photo[] = []
        querySnapshot2.forEach((doc) => {
          phts.push({
            id: doc.id,
            ...doc.data()
          }as Photo)
        });
        setPhotos(phts)
      })

      const docRef = doc(db, "folders", params.folder as string);
      getDoc(docRef).then((docSnap) => {
        if (docSnap.exists()) {
          setFolder({...docSnap.data(),id:params.folder} as Folder)
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
        setLoading(false)
      })
  },[params.folder])



  if(loading){
      return(
        <Loading/>
      )
  }

  return (
    <div className='mx-auto container'>
        <div className='flex py-8 justify-between items-end'>
            <Link href={"/dashboard/uploads/"+folder?.parent} className='text-2xl flex gap-5 items-center'><ArrowLeft/>{folder?.name}</Link>
            <div className='flex gap-2'>
                <UploadImage parent={params.folder as string}/>
                <CreateNewFolder parent={params.folder as string}/>
            </div>
        </div>
        {/* <div className='flex gap-4 bg-[#00000005] justify-center border-dashed border-muted-forground w-full h-[200px]  border-[2px] mb-4 items-center'>
            <ImageIcon  size={22}/>
            Select images
        </div> */}
        <Separator className='my-10'/>
        <h1 className='text-2xl mb-4'>Children Folders</h1>
        <div className='grid gap-4 grid-cols-3 '>
            {
                folders.length>0 &&
                folders.map((f) => {
                    return (
                        <FolderComp folder={f} key={f.id}/>
                    )
                })
            }
            {
                !(folders.length>0) &&
                <h1>No children folders</h1>
            }
        </div>
        <Separator className='my-10'/>
        <h1 className='text-2xl mb-4'>Images</h1>
        <div className='grid gap-4 grid-cols-3 '>

    {
        photos.length>0 &&
        photos.map((p) => {
            return(
                <ImageComp key={p.id} img={p}/>
            )
        })
    }
    {
        !(photos.length>0) &&
        <h1>No images</h1>
    }
        </div>
    </div>
  )
}




export default Page