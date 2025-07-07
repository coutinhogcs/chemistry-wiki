import FirstBody from "@/components/firstbody"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Home - O Siris Project',
  description: 'Chemistry Project'
}

export default function Home(){
  return(
    <div className="min-h-screen bg-[#F5F0E7]">
      <FirstBody/>
    </div>
  ) 
}