import withAuth from "@/authentication/protectedPage";
import Table from "@/components/table";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import React from "react"

export const getServerSideProps: GetServerSideProps = async () => {
    try {
      // Fetch data from external API
      const res = await fetch('https://dummyjson.com/products');
      const repo = await res.json();
      // Pass data to the page via props
      return {
        props: {
          repo,
        },
      };
    } catch (error) {
      return {
        props: {
          repo: null, 
        },
      };
    }
  };


const Dashboard = ({
    repo,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {

    const products = repo?.products

    return (
        <div className="p-3 mt-3">
            <div className="p-2 bg-white rounded-md">
                <p className="text-base font-semibold text-black">Products</p>
                <hr className="mt-1 mb-1"/>
                <Table products={products} />
            </div>
        </div>
    )
};

export default withAuth(Dashboard);
