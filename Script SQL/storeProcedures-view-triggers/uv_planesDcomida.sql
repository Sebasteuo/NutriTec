/************************************************************************************************
   Nombre:    uv_planesDcomida     
  
   Proposito: crea un vista de los planes 
   
   REVISIONES:
   Ver          Fecha           Autor                       Descripcion
   ---------    --------        --------------              ------------------------
   1.0          11/11/2021       Gabriel conejo valerio      1. Creacion de procedimiento			


   Notas:


*************************************************************************************************/

CREATE VIEW uv_planesDcomida AS

SELECT PLANDCOMIDA.IDPlan, PLANDCOMIDA.Nombre, NUTRICIONISTA_PLAN.CodigoNutricionista 
FROM PLANDCOMIDA  
JOIN NUTRICIONISTA_PLAN ON NUTRICIONISTA_PLAN.IDPlan = PLANDCOMIDA.IDPlan