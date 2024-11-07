var wms_layers = [];

var lyr_SateliteImage_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "Satelite Image",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/SateliteImage_0.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [11892110.597529, -707715.193035, 11893851.537962, -702928.831348]
                            })
                        });
var lyr_FloodproneAreas_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "Flood-prone Areas",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/FloodproneAreas_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [11892114.281314, -707711.388545, 11893850.279941, -702933.857515]
                            })
                        });
var format_Roads_2 = new ol.format.GeoJSON();
var features_Roads_2 = format_Roads_2.readFeatures(json_Roads_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Roads_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Roads_2.addFeatures(features_Roads_2);
var lyr_Roads_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Roads_2, 
                style: style_Roads_2,
                popuplayertitle: "Roads",
                interactive: false,
                title: '<img src="styles/legend/Roads_2.png" /> Roads'
            });
var format_TrainStations_3 = new ol.format.GeoJSON();
var features_TrainStations_3 = format_TrainStations_3.readFeatures(json_TrainStations_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TrainStations_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TrainStations_3.addFeatures(features_TrainStations_3);
var lyr_TrainStations_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TrainStations_3, 
                style: style_TrainStations_3,
                popuplayertitle: "Train Stations",
                interactive: false,
                title: '<img src="styles/legend/TrainStations_3.png" /> Train Stations'
            });
var format_Railway_4 = new ol.format.GeoJSON();
var features_Railway_4 = format_Railway_4.readFeatures(json_Railway_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Railway_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Railway_4.addFeatures(features_Railway_4);
var lyr_Railway_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Railway_4, 
                style: style_Railway_4,
                popuplayertitle: "Railway",
                interactive: false,
                title: '<img src="styles/legend/Railway_4.png" /> Railway'
            });
var format_CiliwungRiver_5 = new ol.format.GeoJSON();
var features_CiliwungRiver_5 = format_CiliwungRiver_5.readFeatures(json_CiliwungRiver_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CiliwungRiver_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CiliwungRiver_5.addFeatures(features_CiliwungRiver_5);
var lyr_CiliwungRiver_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CiliwungRiver_5, 
                style: style_CiliwungRiver_5,
                popuplayertitle: "Ciliwung River",
                interactive: false,
                title: '<img src="styles/legend/CiliwungRiver_5.png" /> Ciliwung River'
            });
var format_LentengAgung_6 = new ol.format.GeoJSON();
var features_LentengAgung_6 = format_LentengAgung_6.readFeatures(json_LentengAgung_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LentengAgung_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LentengAgung_6.addFeatures(features_LentengAgung_6);
var lyr_LentengAgung_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LentengAgung_6, 
                style: style_LentengAgung_6,
                popuplayertitle: "Lenteng Agung",
                interactive: false,
                title: '<img src="styles/legend/LentengAgung_6.png" /> Lenteng Agung'
            });
var format_FieldworkAreas_7 = new ol.format.GeoJSON();
var features_FieldworkAreas_7 = format_FieldworkAreas_7.readFeatures(json_FieldworkAreas_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FieldworkAreas_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FieldworkAreas_7.addFeatures(features_FieldworkAreas_7);
var lyr_FieldworkAreas_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FieldworkAreas_7, 
                style: style_FieldworkAreas_7,
                popuplayertitle: "Fieldwork Areas",
                interactive: true,
                title: '<img src="styles/legend/FieldworkAreas_7.png" /> Fieldwork Areas'
            });

lyr_SateliteImage_0.setVisible(true);lyr_FloodproneAreas_1.setVisible(true);lyr_Roads_2.setVisible(true);lyr_TrainStations_3.setVisible(true);lyr_Railway_4.setVisible(true);lyr_CiliwungRiver_5.setVisible(true);lyr_LentengAgung_6.setVisible(true);lyr_FieldworkAreas_7.setVisible(true);
var layersList = [lyr_SateliteImage_0,lyr_FloodproneAreas_1,lyr_Roads_2,lyr_TrainStations_3,lyr_Railway_4,lyr_CiliwungRiver_5,lyr_LentengAgung_6,lyr_FieldworkAreas_7];
lyr_Roads_2.set('fieldAliases', {'osm_id': 'osm_id', 'smoothness': 'smoothness', 'surface': 'surface', 'oneway': 'oneway', 'lanes': 'lanes', 'layer': 'layer', 'highway': 'highway', 'name': 'name', 'bridge': 'bridge', 'source': 'source', 'width': 'width', });
lyr_TrainStations_3.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FGSSTA': 'FGSSTA', 'KLSSTA': 'KLSSTA', 'FCODE': 'FCODE', 'KODKOD': 'KODKOD', 'WILSTA': 'WILSTA', 'DOPSTA': 'DOPSTA', 'KMTSTA': 'KMTSTA', 'LINSTA': 'LINSTA', 'KONKON': 'KONKON', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_Railway_4.set('fieldAliases', {'FCODE': 'FCODE', 'TIPREL': 'TIPREL', 'JMLREL': 'JMLREL', 'KMXREL': 'KMXREL', 'KLSREL': 'KLSREL', 'REMARK': 'REMARK', 'NAMOBJ': 'NAMOBJ', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_CiliwungRiver_5.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'TIPSNG': 'TIPSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'STATUS': 'STATUS', 'WMAX': 'WMAX', 'DBTMAX': 'DBTMAX', 'SLPRT': 'SLPRT', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_LentengAgung_6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'UUPP': 'UUPP', 'LUAS': 'LUAS', });
lyr_FieldworkAreas_7.set('fieldAliases', {'id': 'id', 'RW': 'RW', 'RT': 'RT', 'name': 'name', });
lyr_Roads_2.set('fieldImages', {'osm_id': '', 'smoothness': '', 'surface': '', 'oneway': '', 'lanes': '', 'layer': '', 'highway': '', 'name': '', 'bridge': '', 'source': '', 'width': '', });
lyr_TrainStations_3.set('fieldImages', {'NAMOBJ': '', 'FGSSTA': '', 'KLSSTA': '', 'FCODE': '', 'KODKOD': '', 'WILSTA': '', 'DOPSTA': '', 'KMTSTA': '', 'LINSTA': '', 'KONKON': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', });
lyr_Railway_4.set('fieldImages', {'FCODE': '', 'TIPREL': '', 'JMLREL': '', 'KMXREL': '', 'KLSREL': '', 'REMARK': '', 'NAMOBJ': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'SHAPE_Leng': '', });
lyr_CiliwungRiver_5.set('fieldImages', {'NAMOBJ': '', 'TIPSNG': '', 'KLSSNG': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'NAMWS': '', 'NAMDAS': '', 'STATUS': '', 'WMAX': '', 'DBTMAX': '', 'SLPRT': '', 'SHAPE_Leng': '', });
lyr_LentengAgung_6.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDPBPS': 'TextEdit', 'KDPKAB': 'TextEdit', 'KDPPUM': 'TextEdit', 'LUASWH': 'TextEdit', 'TIPADM': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADKC': 'TextEdit', 'WIADKK': 'TextEdit', 'WIADPR': 'TextEdit', 'WIADKD': 'TextEdit', 'UUPP': 'TextEdit', 'LUAS': 'TextEdit', });
lyr_FieldworkAreas_7.set('fieldImages', {'id': '', 'RW': '', 'RT': '', 'name': '', });
lyr_Roads_2.set('fieldLabels', {'osm_id': 'header label - visible with data', 'smoothness': 'no label', 'surface': 'no label', 'oneway': 'no label', 'lanes': 'no label', 'layer': 'no label', 'highway': 'no label', 'name': 'no label', 'bridge': 'no label', 'source': 'no label', 'width': 'no label', });
lyr_TrainStations_3.set('fieldLabels', {'NAMOBJ': 'header label - visible with data', 'FGSSTA': 'no label', 'KLSSTA': 'no label', 'FCODE': 'no label', 'KODKOD': 'no label', 'WILSTA': 'no label', 'DOPSTA': 'no label', 'KMTSTA': 'no label', 'LINSTA': 'no label', 'KONKON': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_Railway_4.set('fieldLabels', {'FCODE': 'no label', 'TIPREL': 'no label', 'JMLREL': 'no label', 'KMXREL': 'no label', 'KLSREL': 'no label', 'REMARK': 'no label', 'NAMOBJ': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', });
lyr_CiliwungRiver_5.set('fieldLabels', {'NAMOBJ': 'header label - visible with data', 'TIPSNG': 'no label', 'KLSSNG': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'NAMWS': 'no label', 'NAMDAS': 'no label', 'STATUS': 'no label', 'WMAX': 'no label', 'DBTMAX': 'no label', 'SLPRT': 'no label', 'SHAPE_Leng': 'no label', });
lyr_LentengAgung_6.set('fieldLabels', {'OBJECTID': 'hidden field', 'NAMOBJ': 'hidden field', 'FCODE': 'hidden field', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'KDBBPS': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDPBPS': 'no label', 'KDPKAB': 'no label', 'KDPPUM': 'no label', 'LUASWH': 'no label', 'TIPADM': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'WIADKC': 'no label', 'WIADKK': 'no label', 'WIADPR': 'no label', 'WIADKD': 'no label', 'UUPP': 'no label', 'LUAS': 'no label', });
lyr_FieldworkAreas_7.set('fieldLabels', {'id': 'no label', 'RW': 'no label', 'RT': 'no label', 'name': 'header label - always visible', });
lyr_FieldworkAreas_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});