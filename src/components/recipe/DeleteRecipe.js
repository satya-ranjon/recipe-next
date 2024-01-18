"use client";
import React from "react";
import Button from "../common/Button";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import { useGlobalContext } from "@/contexts/store";

const DeleteRecipe = ({ id }) => {
  const router = useRouter();
  const { deleteRecipe } = useGlobalContext();

  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#fb923c",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteRecipe(id);
        Swal.fire({
          title: "Deleted!",
          text: "Your recipe has been deleted.",
          icon: "success",
          confirmButtonColor: "#fb923c",
        });

        router.push("/");
      }
    });
  };
  return (
    <Button onClick={handleDelete}>
      <span className=" md:hidden text-xl">
        <MdDelete />
      </span>
      <span className=" hidden md:block text-lg font-normal">Delete</span>
    </Button>
  );
};

export default DeleteRecipe;
