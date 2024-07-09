import blogModels from '../models/blogModels.js';
//metodos para el CRUD

//Mostrar todo de la bd
export const getAllBlogs = async (req, res)=>{
    try {
        const blogs = await blogModels.findAll()
        res.json(blogs);
    } catch (error) {
        res.json({message: error.message});
    }
}

//Mostrar un registro 
export const getBlogs = async (req, res)=>{
    try {
        const blog = await blogModels.findAll({ where:{id: req.params.id} })
        res.json(blog)
    } catch (error) {
        res.json({message: error.message});
    }
}

//Crear un registro 
export const createBlog = async (req, res)=>{
    try {
       await blogModels.create(req.body)
       res.json({message: 'Registro creado correctamente'})
    } catch (error) {
        res.json({message: error.message});
    }
}

//Actualizar un registro 
export const updateBlog = async (req, res)=>{
    try {
      await blogModels.update(req.body,{ where: {id: req.params.id} })
        res.json({message: 'Registro actualizado correctamente'})
    } catch (error) {
        res.json({message: error.message});
    }
}

//Eliminar un registro
export const deleteBlog = async (req, res)=>{
    try {
       await blogModels.destroy({ where: {id: req.params.id} })
        res.json({message: 'Registro Eliminado correctamente'})
    } catch (error) {
        res.json({message: error.message});
    }
}