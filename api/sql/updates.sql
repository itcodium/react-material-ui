drop table hr_app_modulo
drop table hr_app_perfil_modulo
drop table hr_app_profile_menu
drop table hr_app_session_keys
drop table hr_cliente
drop table hr_cliente_configuracion
drop table hr_error
drop table hr_menu
drop table hr_menu_perfil
drop table hr_menu_text
drop table hr_param;

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


// 2020-07-05

ALTER TABLE `u159062377_news`.`hr_app_modulo`
ADD COLUMN `codigo` VARCHAR(45) NULL AFTER `id_modulo`,
ADD UNIQUE INDEX `codigo_UNIQUE` (`codigo` ASC);

UPDATE `u159062377_news`.`hr_app_modulo` SET `codigo`='USER' WHERE `id_modulo`='16';
UPDATE `u159062377_news`.`hr_app_modulo` SET `codigo`='MODULE' WHERE `id_modulo`='19';
UPDATE `u159062377_news`.`hr_app_modulo` SET `codigo`='PERFIL' WHERE `id_modulo`='21';
UPDATE `u159062377_news`.`hr_app_modulo` SET `codigo`='PERFIL_MODULE' WHERE `id_modulo`='22';
UPDATE `u159062377_news`.`hr_app_modulo` SET `codigo`='MENU' WHERE `id_modulo`='23';
UPDATE `u159062377_news`.`hr_app_modulo` SET `codigo`='INGLES' WHERE `id_modulo`='27';

ALTER TABLE `u159062377_news`.`hr_app_modulo`
CHANGE COLUMN `codigo` `codigo` VARCHAR(64) NOT NULL ;
// * perfilmoduleGetByModuloUsuario
// * Se modifican todos los procedures de module