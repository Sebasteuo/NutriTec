/************************************************************************************************
   Nombre:    up_LoginCheck     
  
   Proposito: Revisa las si existe usuario registrado 
   
   REVISIONES:
   Ver          Fecha           Autor                       Descripcion
   ---------    --------        --------------              ------------------------
   1.0          8/11/2021       Gabriel conejo valerio      1. Creacion de procedimiento			


   Notas: para selecionarlo la tabla las opciones son 'nutricionista' y 'cliente' los resultados son 
   1 si existe 
   0 no existe


*************************************************************************************************/

CREATE PROCEDURE up_LoginCheck(
    @identificacion INT,
	@resultado INT OUTPUT,
    @Password  VARCHAR(50),
    @StatementType NVARCHAR(50) = '')
    AS
  BEGIN

  IF @StatementType = 'nutricionista'
        BEGIN
            IF EXISTS ( select CodigoNutricionista from dbo.NUTRICIONISTA where (CodigoNutricionista = @identificacion AND Password=@Password))
                BEGIN
                    set @resultado =1
                END
            ELSE
                    set @resultado =0

        END
        
        IF @StatementType = 'cliente'
        BEGIN
           IF EXISTS ( select Cedula from dbo.USUARIO where (Cedula =  @identificacion AND Password=@Password))
                BEGIN
                    set @resultado =1
                END
                ELSE
                    set @resultado =0
        END
  END