import SimpleReactValidator from "simple-react-validator";
import {ReactNode} from "react";

export interface ICartItem {
    id: string;
    name: String;
    price: Number;
    quantity: Number;
    productId?: any;
}

export interface ICourse {
    _id: string;
    title: string;
    description?: string;
    price: number;
    image: string;
    imageUrl?: string;
    category?: string;
    info?: string;
}

export interface IUser {
    userId: string;
    email: string;
    fullname: string;
    isAdmin: boolean;
}

export interface IUserState {
    user: IUser;
}

export interface IToken {
    user: number;
    iat: number;
    exp: number;
}

export interface ICourseState {
    status: string;
    course: any;
    error: any;
}

export interface ICoursesState {
    status: "idle" | "loading" | "completed" | "failed";
    courses : ICourse[];
    error: any;
}

export interface ICartState {
    status: "idle" | "loading" | "completed" | "failed";
    cartItems: ICartItem[];
    totalAmount: number;
    totalQTY: number;
    error: any;
}

export interface IRootState {
    cart: ICartState;
    course: ICourseState;
    courses: ICoursesState;
    user: IUserState;
    loadingBar: any;
} 

export interface IFCProps {
    children: ReactNode;
}

export interface ICategory {
    id: string;
    name: string;
}

export interface IUserContextProps {
    fullname: string;
    setFullname: React.Dispatch<React.SetStateAction<string>>;
    email: string;
    setEmail: React.Dispatch<React.SetStateAction<string>>;
    password: string;
    setPassword: React.Dispatch<React.SetStateAction<string>>;
    validator: React.MutableRefObject<SimpleReactValidator | null> | null;
    handleLogin: (event: React.FormEvent) => Promise<void>;   
    handleRegister: (event: React.FormEvent) => Promise<void>; 
}

export interface IAdminContextProps {
    currentPage: number;
    setCurrentPage: (page: number) => void;
    perPage: number;
    handlePageChange: (page: number) => void;
    currentCourse: any;
    setSearch: (search: string) => void;
    openNewCourseDialog: () => void;
    openEditCourseDialog: (course: any) => void;
    openDeleteCourseDialog: (course: any) => void;
    openImageCourseDialog: (course: any) => void;
    courseData: any[];
    filteredCourses: any[];
    sortCoursesAsc: () => void;
    sortCoursesDes: () => void;
    validator: React.MutableRefObject<SimpleReactValidator | null> | null;
    categories: {id: string; name: string}[];
}

export interface IPaginationProps {
    totalCourse: number;
    currentPage: number;
    perPage: number;
    onPageChange: (page: number) => void;
}

export interface IButtonBasketProps {
    handleSubmit: () => void;
    isClicked: boolean;
    course: {
        _id: string;
        imageUrl: string;
        title: string;
        price: string;
    };
}

export interface ICourseProps {
    courses: any[];
}


