import Layout from "@/components/templates/Layout";
import JumbotronHome from "@/components/organisms/home/JumbotronHome";
import SupportedBy from "@/components/organisms/home/SupportedBy";
import Benefit from "@/components/organisms/home/Benefit";
import Feature from "@/components/organisms/home/Feature";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/config";
import { useEffect } from "react";

export default function Home() {
  const [user] = useAuthState(auth);

  useEffect(() => {    
    console.log(user);    
  }, [user])

  return (
    <Layout>
      <JumbotronHome />   
      <Benefit />
      <Feature />
      <SupportedBy />
    </Layout>    
  );
}
