CREATE DEFINER=`u159062377_user`@`127.0.0.1` PROCEDURE `clienteUpdate`(
	pId_Cliente int,
	pNombre varchar(500),
	pCodigo varchar(25),
	pHabilitado tinyint,
	pModificado_Por varchar(20)
    )
BEGIN
    UPDATE hr_cliente
    SET
		nombre=pNombre,
		codigo=pCodigo,
		habilitado=pHabilitado,
		fecha_modificacion=now(),
		modificado_por=pModificado_Por
	WHERE id_cliente=pId_Cliente;
	SELECT  ROW_COUNT() row_count;
END


ALTER TABLE `u159062377_news`.`hr_app_usuario`
ADD UNIQUE INDEX `usuario_UNIQUE` (`usuario` ASC);