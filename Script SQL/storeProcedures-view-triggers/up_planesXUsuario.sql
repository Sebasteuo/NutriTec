/************************************************************************************************
   Nombre:   up_planesXUsuario    
  
   Proposito:  genera la lista de usuario con nombre y el id plan,  con el nombre del plan
   
   REVISIONES:
   Ver          Fecha           Autor                       Descripcion
   ---------    --------        --------------              ------------------------
   1.0          14/11/2021       Gabriel conejo valerio      1. Creacion de procedimiento			


   Notas: para poder obtner las opcion de insert, select, update y delete la palabras claves son
   -planespecifico usa el idplan para obtner todos los usuarios con ese plan
   -listaPlan lista todos los usuarios con los planes


*************************************************************************************************/
CREATE PROCEDURE up_planesXUsuario ( 
    @IDPlan INT,
    @StatementType NVARCHAR(50) = '')
    AS
  BEGIN
      IF @StatementType = 'planespecifico'
        BEGIN
            SELECT  
            dbo.USUARIO.nombre1,dbo.USUARIO.nombre2,dbo.USUARIO.Apellido1,dbo.USUARIO.Apellido2,
            dbo.PLANDCOMIDA.IDPlan,
            dbo.PLANDCOMIDA.Nombre
            FROM dbo.USUARIO
            LEFT JOIN dbo.PUEDE_TENER ON dbo.USUARIO.Cedula= dbo.PUEDE_TENER.Cedula
            LEFT JOIN dbo.NUTRICIONISTA ON  dbo.NUTRICIONISTA.CodigoNutricionista=dbo.PUEDE_TENER.CodigoNutricionista
            LEFT JOIN dbo.NUTRICIONISTA_PLAN ON dbo.NUTRICIONISTA_PLAN.CodigoNutricionista=dbo.NUTRICIONISTA.CodigoNutricionista
            LEFT JOIN dbo.PLANDCOMIDA ON dbo.NUTRICIONISTA_PLAN.IDPlan=dbo.PLANDCOMIDA.IDPlan
            WHERE  dbo.PLANDCOMIDA.IDPlan =@IDPlan
        END

        IF @StatementType = 'listaPlan'
        BEGIN
            SELECT  
            dbo.USUARIO.nombre1,dbo.USUARIO.nombre2,dbo.USUARIO.Apellido1,dbo.USUARIO.Apellido2,
            dbo.PLANDCOMIDA.IDPlan,
            dbo.PLANDCOMIDA.Nombre
            FROM dbo.USUARIO
            LEFT JOIN dbo.PUEDE_TENER ON dbo.USUARIO.Cedula= dbo.PUEDE_TENER.Cedula
            LEFT JOIN dbo.NUTRICIONISTA ON  dbo.NUTRICIONISTA.CodigoNutricionista=dbo.PUEDE_TENER.CodigoNutricionista
            LEFT JOIN dbo.NUTRICIONISTA_PLAN ON dbo.NUTRICIONISTA_PLAN.CodigoNutricionista=dbo.NUTRICIONISTA.CodigoNutricionista
            LEFT JOIN dbo.PLANDCOMIDA ON dbo.NUTRICIONISTA_PLAN.IDPlan=dbo.PLANDCOMIDA.IDPlan
        END
    END
