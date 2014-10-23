/**
 * Created by Christoffer on 23-10-2014.
 */
/* URL */
var API_URL               = '192.168.0.55/joomlaapp';
var API_REQUEST           = '/index.php?option=com_webitall_app&task=api.request';

/* REGEX */
var REGEX_HTML            = /<\/?\w+((\s+\w+(\s*=\s*(?:".*?"|'.*?'|[^'">\s]+))?)+\s*|\s*)?>/g;
var REGEX_LINK            = /^(.*)\?/;

/* SQL */
var GETARTICLEFROMMENUSQL = 'SELECT * FROM #__content WHERE id = ';
var GETARTICLESCTRLSQL    = 'SELECT * FROM #__menu WHERE menutype = "app-menu" AND published = 1 AND component_id = 22';
var GETUSERSCTRLSQL       = 'SELECT * FROM #__users';
var MENUCTRLSQL           = 'SELECT * FROM #__menu_types';
var GETCONTACTSCTRLSQL    = 'SELECT * FROM #__contact_details';