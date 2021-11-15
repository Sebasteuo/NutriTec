/************************************************************************************************
   Nombre:    uv_productosXAprobar     
  
   Proposito: crea un vista de los productos por aprobar
   
   REVISIONES:
   Ver          Fecha           Autor                       Descripcion
   ---------    --------        --------------              ------------------------
   1.0          11/11/2021       Gabriel conejo valerio      1. Creacion de procedimiento			


   Notas:


*************************************************************************************************/
CREATE VIEW uv_productosXAprobar AS
SELECT * FROM dbo.PRODUCTO WHERE Aprobado=0