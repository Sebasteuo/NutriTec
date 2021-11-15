/************************************************************************************************
   Nombre:    up_caloriasEnPlanEspeci     
  
   Proposito: procedimiento para obtener la calorias total de un plan en especifico
   
   REVISIONES:
   Ver          Fecha           Autor                       Descripcion
   ---------    --------        --------------              ------------------------
   1.0          14/11/2021       Gabriel conejo valerio      1. Creacion de procedimiento			


   Notas:



*************************************************************************************************/
CREATE PROCEDURE up_caloriasEnPlanEspeci(
    @IDPlan INT
    )
AS
BEGIN

SELECT  [IDPlan]
      ,[NombrePlan],
      
	  sum([Energia]) AS totalDeCalorias
  FROM [proyecto2].[dbo].[uv_productosENPlan]
  WHERE IDPlan=  @IDPlan
  GROUP BY  [IDPlan],[NombrePlan]

  END