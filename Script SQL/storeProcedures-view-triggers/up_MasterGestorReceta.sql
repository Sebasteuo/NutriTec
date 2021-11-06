/************************************************************************************************
   Nombre:    up_MasterGestorReceta     
  
   Proposito:  Crea, muestra (lista), muestra (especifico), modifica, elimina elemento Nutricionista 
   
   REVISIONES:
   Ver          Fecha           Autor                       Descripcion
   ---------    --------        --------------              ------------------------
   1.0          1/11/2021       Gabriel conejo valerio      1. Creacion de procedimiento			


   Notas: para poder obtner las opcion de insert, select, update y delete la palabras claves son
   -Insert:crea un nuevo Receta 
   -SelectLista: muestra una lista de todos las Receta en todos los productos 
   -SelectEspecifico: muestra un Receta especifico para un producto
   -Update: actualiza todos los valores del Receta usando IDReceta, como llave de busqueda
   -Delete: elimina todos los valores del Receta usando IDReceta, como llave de busqueda


*************************************************************************************************/


CREATE PROCEDURE up_MasterGestorReceta(
    @IDReceta INT,
    @Nombre VARCHAR(50),
    @StatementType NVARCHAR(50) = '')
AS
  BEGIN
      IF @StatementType = 'Insert'
        BEGIN
            INSERT INTO Dbo.RECETA(IDReceta,Nombre)
            VALUES(@IDReceta,@Nombre);
        END

      IF @StatementType = 'SelectLista'
        BEGIN
            SELECT *
            FROM   Dbo.RECETA
        END

        IF @StatementType = 'SelectEspecifico'
        BEGIN
            SELECT *
            FROM Dbo.RECETA  
            WHERE  IDReceta=@IDReceta 
        END  

      IF @StatementType = 'Update'
        BEGIN
            UPDATE Dbo.RECETA
            SET IDReceta =@IDReceta,
                Nombre =@Nombre
            WHERE  IDReceta=@IDReceta 
        END
      ELSE IF @StatementType = 'Delete'
        BEGIN
            DELETE FROM Dbo.RECETA
            WHERE  IDReceta=@IDReceta 
        END
  END