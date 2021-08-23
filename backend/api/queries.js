module.exports = {
    categoryWithChildren: `
        with recursive subcategories (id) as (
            select id from categories where id = ?
            union all
            select c.id from subcategories, categories c
                where "parentId" = subcategories.id
        )
        select id from subcategories
    `
}