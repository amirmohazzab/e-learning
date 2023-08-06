import { useState, useEffect, useRef, createContext, ReactNode, FC } from "react";
import { orderBy } from "lodash";

import { paginate } from "./../../utils/paginate";
import NewCourseDialog from "./../admin/dialogs/NewCourseDialog";
import EditCourseDialog from './../admin/dialogs/EditCourseDialog';
import DeleteCourseDialog from './../admin/dialogs/DeleteCourseDialog';
import ImageCourseDialog from './../admin/dialogs/ImageCourseDialog';
import  SimpleReactValidator  from 'simple-react-validator';
import { IAdminContextProps, ICategory, ICourse } from "../../utils/types";


export const adminContext = createContext<IAdminContextProps>({
    currentPage: 1,
    setCurrentPage: () => {},
    perPage: 5,
    handlePageChange: () => {},
    currentCourse: {},
    setSearch: () => {},
    openNewCourseDialog: () => {},
    openEditCourseDialog: () => {},
    openDeleteCourseDialog: () => {},
    openImageCourseDialog: () => {},
    courseData: [],
    filteredCourses: [],
    sortCoursesAsc: () => {},
    sortCoursesDes: () => {},
    validator: null,
    categories: [],
  });
  
interface IProps {
    courses: ICourse[];
    children: ReactNode;
}

const AdminContext: FC<IProps> = ({ courses, children }) => {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [perPage] = useState<number>(5);
    const [currentCourse, setCurrentCourse] = useState<any>({});
    const [search, setSearch] = useState<string>("");
    const [courseList, setCourseList] = useState<any[]>([]);
    const [newCourseDialog, setNewCourseDialog] = useState<boolean>(false);
    const [editCourseDialog, setEditCourseDialog] = useState<boolean>(false);
    const [deleteCourseDialog, setDeleteCourseDialog] = useState<boolean>(false);
    const [imageCourseDialog, setImageCourseDialog] = useState<boolean>(false);

    useEffect(() => setCourseList(courses), [courses]);

    const categories: ICategory[] =  [
        {
          "id": "1",
          "name": "Mobile"
        },
        {
          "id": "2",
          "name": "Web"
        },
        {
          "id": "3",
          "name": "Desktop"
        },
        {
          "id": "4",
          "name": "Design"
        },
        {
          "id": "5",
          "name": "Database"
        }
      ];

    const validator = useRef<SimpleReactValidator | null>(
        new SimpleReactValidator({
            element: (message: ReactNode) => <div style={{ color: "red" }}>{message}</div>
        })
    );

    const openNewCourseDialog = () => setNewCourseDialog(true);
    const closeNewCourseDialog = () => setNewCourseDialog(false);

    

    const openEditCourseDialog = (course: any) => {
        setEditCourseDialog(true);
        setCurrentCourse(course);
    }
    const closeEditCourseDialog = () => setEditCourseDialog(false);


    const openDeleteCourseDialog = (course: any) => {
        setDeleteCourseDialog(true);
        setCurrentCourse(course);
    }
    const closeDeleteCourseDialog = () => setDeleteCourseDialog(false);


    const openImageCourseDialog = (course: any) => {
        setImageCourseDialog(true);
        setCurrentCourse(course);
    }
    const closeImageCourseDialog = () => setImageCourseDialog(false);



    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };


    const filteredCourses = courseList.filter((course) => course.title.toLowerCase().includes(search.toLowerCase()));

    const courseData = paginate(filteredCourses, currentPage, perPage);


    const sortCoursesAsc = () => {
        setCourseList(orderBy(courseList, "price", "asc"));
    }

    const sortCoursesDes = () => {
        setCourseList(orderBy(courseList, "price", "desc"));
    }



    return (
        <adminContext.Provider
            value={{
                currentPage,
                setCurrentPage,
                currentCourse,
                perPage,
                handlePageChange,
                courseData,
                openNewCourseDialog,
                openEditCourseDialog,
                openDeleteCourseDialog,
                openImageCourseDialog,
                setSearch,
                filteredCourses,
                sortCoursesAsc,
                sortCoursesDes,
                validator,
                categories
            }}
        >
            <NewCourseDialog
                showDialog={newCourseDialog}
                closeDialog={closeNewCourseDialog}
            />
            <EditCourseDialog
                showDialog={editCourseDialog}
                closeDialog={closeEditCourseDialog}
                course={currentCourse}
            />
            <DeleteCourseDialog
                showDialog={deleteCourseDialog}
                closeDialog={closeDeleteCourseDialog}
                course={currentCourse}
            />
            <ImageCourseDialog
                showDialog={imageCourseDialog}
                closeDialog={closeImageCourseDialog}
                course={currentCourse}
            />
            {children}
        </adminContext.Provider>
    );
};

export default AdminContext;
