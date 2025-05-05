export interface HeaderCategoriesType {
    createdAt: string,
    icon: string,
    id: number,
    image: string,
    name: string,
    parentCategoryId: null | number,
    subCategories:HeaderCategoriesType[],
    updataAt:string
}