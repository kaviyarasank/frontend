import { useEffect } from "react";
import { useRouter } from "next/router";
import { NextPage } from 'next';
import React from "react";
import { getAccessToken } from "@/utils";


function withAuth(Component: any) {
  const Auth = (props: any) => {
    // If user is not logged in, return login component
    const router = useRouter();

    const users = getAccessToken();

    useEffect(()=>{
      if(!users) {
        router.push("/login")
      }
    },[users])

    if (users) {
      return <Component {...props} />;
    } 
    // If user is logged in, return original component
  };

  // Copy getInitial props so it will run as well
  if (Component.getInitialProps) {
    Auth.getInitialProps = Component.getInitialProps;
  }

  return Auth;
}

export default withAuth;
