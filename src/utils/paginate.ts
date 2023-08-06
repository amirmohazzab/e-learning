import _ from "lodash";

import {ICourse} from "./types";

export const paginate = (courses: ICourse[], currentPage: number, perPage: number): ICourse[] => {
    const startIndex = (currentPage - 1) * perPage;
    return _(courses)
        .slice(startIndex)
        .take(perPage)
        .value();
};
