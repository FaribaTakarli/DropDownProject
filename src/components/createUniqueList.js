 const CreateUniqueList = (StudentIds) => {
     //let StudentIds = [1, 2, 3, 3, 3, 4, 4, 5, 5, 6];
     let UnqueStudentIds = [...new Set(StudentIds)];
     return UnqueStudentIds;
 };

 export default CreateUniqueList;