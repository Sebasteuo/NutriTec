/************************************************************************************************
   FechaRegistro:    up_MasterGestorRegistraMedidas     
  
   Proposito:  Crea, muestra (lista), muestra (especifico), modifica, elimina elemento Nutricionista 
   
   REVISIONES:
   Ver          Fecha           Autor                       Descripcion
   ---------    --------        --------------              ------------------------
   1.0          1/11/2021       Gabriel conejo valerio      1. Creacion de procedimiento			


   Notas: para poder obtner las opcion de insert, select, update y delete la palabras claves son
   -Insert:crea un nuevo RegistraMedidas 
   -SelectLista: muestra una lista de todos las RegistraMedidas en todos los productos 
   -SelectEspecifico: muestra un RegistraMedidas especifico para un producto
   -Update: actualiza todos los valores del RegistraMedidas usando Cedula, como llave de busqueda
   -Delete: elimina todos los valores del RegistraMedidas usando Cedula, como llave de busqueda


*************************************************************************************************/


CREATE PROCEDURE up_MasterGestorRegistraMedidas(
    @Cedula INT,
    @Zona VARCHAR(50),
    @Medida NUMERIC(5,2),
    @FechaRegistro DATETIME,
    @StatementType NVARCHAR(50) = '')
AS
  BEGIN
      IF @StatementType = 'Insert'
        BEGIN
            INSERT INTO Dbo.REGISTRAMEDIDAS(Cedula,Zona,Medida,FechaRegistro)
            VALUES(@Cedula,@Zona,@Medida,@FechaRegistro);
        END

      IF @StatementType = 'SelectLista'
        BEGIN
            SELECT *
            FROM   Dbo.REGISTRAMEDIDAS
        END

        IF @StatementType = 'SelectEspecifico'
        BEGIN
            SELECT *
            FROM Dbo.REGISTRAMEDIDAS    
            WHERE  Cedula=@Cedula  
        END  

      IF @StatementType = 'Update'
        BEGIN
            UPDATE Dbo.REGISTRAMEDIDAS
            SET Cedula =@Cedula,
                FechaRegistro =@FechaRegistro
            WHERE  Cedula=@Cedula AND FechaRegistro=@FechaRegistro 
        END
      ELSE IF @StatementType = 'Delete'
        BEGIN
            DELETE FROM Dbo.RECETAXPLA
            WHERE  Cedula=@Cedula AND FechaRegistro=@FechaRegistro 
        END
  END