/************************************************************************************************
   Nombre:    up_MasterGestorTiempoDComida     
  
   Proposito:  Crea, muestra (lista), muestra (especifico), modifica, elimina elemento Nutricionista 
   
   REVISIONES:
   Ver          Fecha           Autor                       Descripcion
   ---------    --------        --------------              ------------------------
   1.0          1/11/2021       Gabriel conejo valerio      1. Creacion de procedimiento			


   Notas: para poder obtner las opcion de insert, select, update y delete la palabras claves son
   -Insert:crea un nuevo TiempoDComida 
   -SelectLista: muestra una lista de todos las TiempoDComida en todos los productos 
   -SelectEspecifico: muestra un TiempoDComida especifico para un producto
   -Update: actualiza todos los valores del TiempoDComida usando IdTiempo,CodigoDBarras como llaves de busqueda
   -Delete: elimina todos los valores del TiempoDComida usando IdTiempo,CodigoDBarras como llaves de busqueda


*************************************************************************************************/


CREATE PROCEDURE up_MasterGestorTiempoDComida(
    @IdTiempo INT,  
    @Nombre VARCHAR(50),
    @StatementType NVARCHAR(50) = '')
AS
  BEGIN
      IF @StatementType = 'Insert'
        BEGIN
            INSERT INTO Dbo.TIEMPODCOMIDA(IdTiempo,Nombre)
            VALUES(@IdTiempo,@Nombre);
        END

      IF @StatementType = 'SelectLista'
        BEGIN
            SELECT *
            FROM   Dbo.TIEMPODCOMIDA
        END

        IF @StatementType = 'SelectEspecifico'
        BEGIN
            SELECT *
            FROM Dbo.TIEMPODCOMIDA  
            WHERE  IdTiempo=@IdTiempo 
        END  

      IF @StatementType = 'Update'
        BEGIN
            UPDATE Dbo.TIEMPODCOMIDA
            SET 
                @IdTiempo =@IdTiempo,
                @Nombre=Nombre
            WHERE  IdTiempo=@IdTiempo 
        END
      ELSE IF @StatementType = 'Delete'
        BEGIN
            DELETE FROM Dbo.TIEMPODCOMIDA
            WHERE  IdTiempo=@IdTiempo 
        END
  END