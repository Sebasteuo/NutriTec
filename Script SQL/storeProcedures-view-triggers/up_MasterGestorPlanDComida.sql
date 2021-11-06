/************************************************************************************************
   Nombre:    up_MasterGestorPlanDComida     
  
   Proposito:  Crea, muestra (lista), muestra (especifico), modifica, elimina elemento Nutricionista 
   
   REVISIONES:
   Ver          Fecha           Autor                       Descripcion
   ---------    --------        --------------              ------------------------
   1.0          1/11/2021       Gabriel conejo valerio      1. Creacion de procedimiento			


   Notas: para poder obtner las opcion de insert, select, update y delete la palabras claves son
   -Insert:crea un nuevo Producto 
   -SelectLista: muestra una lista de todos los Planes 
   -SelectEspecifico: muestra un Plan especifico
   -Update: actualiza todos los valores del plan usando IDPlan como llave de busqueda
   -Delete: elimina todos los valores del plan usando IDPlan como llave de busqueda


*************************************************************************************************/


CREATE PROCEDURE up_MasterGestorPlanDComida(
    @IDPlan INT,
    @Nombre VARCHAR(50),
    @StatementType NVARCHAR(50) = '')
AS
  BEGIN
      IF @StatementType = 'Insert'
        BEGIN
            INSERT INTO Dbo.PLANDCOMIDA(IDPlan,Nombre)
            VALUES(@IDPlan,@Nombre);
        END

      IF @StatementType = 'SelectLista'
        BEGIN
            SELECT *
            FROM   Dbo.PLANDCOMIDA
        END

        IF @StatementType = 'SelectEspecifico'
        BEGIN
            SELECT *
            FROM Dbo.PLANDCOMIDA  
            WHERE  IDPlan=@IDPlan
        END  

      IF @StatementType = 'Update'
        BEGIN
            UPDATE Dbo.PLANDCOMIDA
            SET IDPlan =@IDPlan,
                Nombre =@Nombre
            WHERE  IDPlan=@IDPlan 
        END
      ELSE IF @StatementType = 'Delete'
        BEGIN
            DELETE FROM Dbo.PLANDCOMIDA
            WHERE  IDPlan=@IDPlan
        END
  END