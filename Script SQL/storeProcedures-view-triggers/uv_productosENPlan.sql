/************************************************************************************************
   Nombre:    uv_productosENPlan     
  
   Proposito: crea un vista de todos los productos que incluyen los planes 
   
   REVISIONES:
   Ver          Fecha           Autor                       Descripcion
   ---------    --------        --------------              ------------------------
   1.0          11/11/2021       Gabriel conejo valerio      1. Creacion de procedimiento			


   Notas:


*************************************************************************************************/


CREATE VIEW uv_productosENPlan AS

SELECT 
dbo.PLANDCOMIDA.IDPlan,
dbo.PLANDCOMIDA.Nombre AS NombrePlan,
dbo.PRODUCTO.CodigoDBarrAS,
dbo.PRODUCTO.Nombre AS NombreProducto,
dbo.PRODUCTO.Energia

FROM dbo.PLANDCOMIDA
LEFT JOIN dbo.PRODUCTOXPLAN ON dbo.PRODUCTOXPLAN.IDPlan=dbo.PLANDCOMIDA.IDPlan
LEFT JOIN  dbo.PRODUCTO ON dbo.PRODUCTO.CodigoDBarrAS=dbo.PRODUCTOXPLAN.CodigoDBarrAS

UNION 

SELECT 
dbo.PLANDCOMIDA.IDPlan,
dbo.PLANDCOMIDA.Nombre AS NombrePlan,
dbo.PRODUCTO.CodigoDBarrAS,
dbo.PRODUCTO.Nombre AS NombreProducto,
dbo.PRODUCTO.Energia
FROM dbo.PLANDCOMIDA 
LEFT JOIN dbo.RECETAXPLAN ON dbo.PLANDCOMIDA.IDPlan=dbo.RECETAXPLAN.IDPlan 
 LEFT JOIN dbo.RECETA ON dbo.RECETAXPLAN.IDReceta=dbo.RECETA.IDReceta
 LEFT JOIN  dbo.PRODUCTOXRECETA ON dbo.PRODUCTOXRECETA.IDReceta= dbo.RECETA.IDReceta
 LEFT JOIN dbo.PRODUCTO ON dbo.PRODUCTO.CodigoDBarrAS=dbo.PRODUCTOXRECETA.CodigoDBarrAS