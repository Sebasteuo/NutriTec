/************************************************************************************************
   Nombre:    udtf_totalNutricional     
  
   Proposito: crea un tabla del total de todos los productos que integra la receta 
   
   REVISIONES:
   Ver          Fecha           Autor                       Descripcion
   ---------    --------        --------------              ------------------------
   1.0          9/11/2021       Gabriel conejo valerio      1. Creacion de la funcion			


   Notas: recibe de parametro el numero de receta y genera una tabla con el total de los valores


*************************************************************************************************/

CREATE FUNCTION udtf_totalNutricional (
	@numReceta INT
)
RETURNS TABLE AS
RETURN
SELECT 
SUM(dbo.PRODUCTO.Energia) as totalEnergia,
SUM(dbo.PRODUCTO.Grasa) as totalGrasa,
SUM(dbo.PRODUCTO.Sodio) as totalSodio,
SUM(dbo.PRODUCTO.Carbohidratos) as totalCarbohidratos,
SUM(dbo.PRODUCTO.Proteina) as totalProteina,
SUM(dbo.PRODUCTO.Hierro) as totalHierro,
SUM(dbo.PRODUCTO.Calcio) as totalCalcio


FROM dbo.PRODUCTOXRECETA
 JOIN dbo.PRODUCTO ON dbo.PRODUCTO.CodigoDBarras= dbo.PRODUCTOXRECETA.CodigoDBarras
 WHERE dbo.PRODUCTOXRECETA.IDReceta=@numReceta;