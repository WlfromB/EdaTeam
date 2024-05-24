import { getConfigValue, getNavigationsValue } from "@ijl/cli";
import { generatePath } from "react-router-dom";

const baseUrl = getNavigationsValue('edateam.main');


export const URLs = {
    baseUrl,

    ui:{
        recipe:{
            url:`${baseUrl}${getNavigationsValue('edateam.recipe')}`,
            on:Boolean(getNavigationsValue('edateam.recipe')),
            getUrl: (recipeId) => generatePath(`${baseUrl}${getNavigationsValue('edateam.recipe')}/:id`, { id: recipeId })
        },
        user:{
            url:`${baseUrl}${getNavigationsValue('edateam.user')}`,
            on:Boolean(getNavigationsValue('edateam.user')),
            getUrl : (userId: number) => generatePath(`${baseUrl}${getNavigationsValue('edateam.user')}`, { userId })
        }
    },
    api:{
        main:getConfigValue('edateam.api')
    },
}
