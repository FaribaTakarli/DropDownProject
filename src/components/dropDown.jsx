import React, { Component } from "react";
import { useState } from "react";
import { useOutsideClick } from "./useOutsideClick";
import  CreateUniqueList  from "./createUniqueList";

const DropDown = () => {

  const [students, setStudents] = useState(["Fariba", "Farina", "Roniya"]);
  const [showUl, setShowUl] = useState(false);

    const handleClickOutside = () => {
        setShowUl(false);

      console.log('custom hook');
    };

    const ref = useOutsideClick(handleClickOutside);

  return (
    <>
      <div className="relative w-1/2 sm:w-1/3 mt-11 ml-6 ">
        <label
          for="name"
          class="block mb-2 text-xl font-bold text-gray-900 dark:text-white "
        >
          Insert New Student Name
        </label>

        <div class="relative ">
          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              xmlns="http://www.w3.org/2000/svg "
              fill="none "
              viewBox="0 0 24 24 "
              stroke-width="1.5 "
              stroke="currentColor "
              class="w-5 h-5 absolute top-3 left-3  "
            >
              <path
                stroke-linecap="round "
                stroke-linejoin="round "
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z "
              />
            </svg>
          </div>
          <input
            ref={ref}
            onClick={updateShowUl}
            onKeyDown={AddStudent}
            type="text"
            id="name"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-400 focus:border-gray-400 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
            placeholder="Farina"
          ></input>
        </div>

        <ul
          style={{ display: showUl ? "block" : "none" }}
          className="absolute left-0 list-none flex flex-col divide-y-2  divide-gray-400 bg-gray-200 text-base font-medium rounded-xl w-full overflow-hidden text-gray-700"
        >
          {students.map((user, index) => {
            return (
              <li key={index} className="p-2 hover:bg-gray-300 ">
                {user}
              </li>
            );
          })}
        </ul>
      </div>

      <div className="mt-48 ml-2 font-medium p-4 border-gray-200 border-1 w-1/2 sm:w-1/3">
        UniqueListResult : {CreateUniqueList([1, 2, 3, 3, 3, 4, 4, 5, 5, 6, 7])}
      </div>
    </>
  );

  function AddStudent(event) {
    if (event.key === "Enter") {
      var allStudents = [...students];
      allStudents.push(ref.current.value);
      setStudents(allStudents);
      ref.current.value = "";

    }
  }

function updateShowUl()
{
    console.log(showUl);
    setShowUl(!showUl);
}


};


export default DropDown;


//  const CreateUniqueList = (StudentIds) => {
//      //let StudentIds = [1, 2, 3, 3, 3, 4, 4, 5, 5, 6];
//      let UnqueStudentIds = [...new Set(StudentIds)];
//      return UnqueStudentIds;
//  };

//  export default CreateUniqueList;
