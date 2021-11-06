/************************************************************************************************
   Nombre:    up_MasterGestorProducto (     
  
   Proposito:  Crea, muestra (lista), muestra (especifico), modifica, elimina elemento Nutricionista 
   
   REVISIONES:
   Ver          Fecha           Autor                       Descripcion
   ---------    --------        --------------              ------------------------
   1.0          1/11/2021       Gabriel conejo valerio      1. Creacion de procedimiento			


   Notas: para poder obtner las opcion de insert, select, update y delete la palabras claves son
   -Insert:crea un nuevo Producto 
   -SelectLista: muestra una lista de todos los Producto 
   -SelectEspecifico: muestra un Producto 
   -Update: actualiza todos los valores del Producto usando el CodigoDBarras como llave de busqueda
   -Delete: elimina todos los valores del Producto usando el CodigoDBarras como llave de busqueda


*************************************************************************************************/


CREATE PROCEDURE up_MasterGestorProducto (     
    @CodigoDBarras INT ,
    @Nombre VARCHAR(50) NOT NULL,
    @Descripcion TEXT,
    @Porcion INT,
    @Energia INT,
    @Grasa INT,
    @Sodio INT,
    @Carbohidratos INT,
    @Proteina INT,
    @Hierro INT,
    @Calcio INT,
    @Aprobado INT,
    @StatementType NVARCHAR(50) = '')
AS
  BEGIN
      IF @StatementType = 'Insert'
        BEGIN
            INSERT INTO Dbo.PRODUCTO(CodigoDBarras,Nombre,Descripcion,Porcion,Energia,Grasa,Sodio,Carbohidratos,Proteina,Hierro,Calcio,Aprobado)
            VALUES(@CodigoDBarras,@Nombre,@Descripcion,@Porcion,@Energia,@Grasa,@Sodio,@Carbohidratos,@Proteina,@Hierro,@Calcio,@Aprobado);
        END

      IF @StatementType = 'SelectLista'
        BEGIN
            SELECT *
            FROM   Dbo.PRODUCTO
        END

        IF @StatementType = 'SelectEspecifico'
        BEGIN
            SELECT *
            FROM Dbo.PRODUCTO  
            WHERE  CodigoDBarras=@CodigoDBarras
        END  

      IF @StatementType = 'Update'
        BEGIN
            UPDATE Dbo.PRODUCTO
            SET CodigoDBarras=@CodigoDBarras ,
                Nombre=@Nombre ,
                Descripcion=@Descripcion ,
                Porcion=@Porcion ,
                Energia=@Energia ,
                Grasa=@Grasa ,
                Carbohidratos=@Carbohidratos ,
                Proteina=@Proteina ,
                Hierro=@Hierro ,
                Calcio=@Calcio ,
                Aprobado=@Aprobado  
            WHERE  CodigoDBarras=@CodigoDBarras
        END
      ELSE IF @StatementType = 'Delete'
        BEGIN
            DELETE FROM Dbo.PRODUCTO
            WHERE  CodigoDBarras=@CodigoDBarras
        END
  END