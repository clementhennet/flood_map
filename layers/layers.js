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
var lyr_ElevationinmetersbasedonALOSWorld3D30m_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "Elevation in meters (based on ALOS World 3D - 30m)",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/ElevationinmetersbasedonALOSWorld3D30m_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [11892137.513135, -707708.061198, 11893838.227602, -702948.024816]
                            })
                        });
var format_PopulationDensityEstimates2015_2 = new ol.format.GeoJSON();
var features_PopulationDensityEstimates2015_2 = format_PopulationDensityEstimates2015_2.readFeatures(json_PopulationDensityEstimates2015_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PopulationDensityEstimates2015_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PopulationDensityEstimates2015_2.addFeatures(features_PopulationDensityEstimates2015_2);
var lyr_PopulationDensityEstimates2015_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PopulationDensityEstimates2015_2, 
                style: style_PopulationDensityEstimates2015_2,
                popuplayertitle: "Population Density Estimates (2015)",
                interactive: false,
    title: 'Population Density Estimates (2015)<br />\
    <img src="styles/legend/PopulationDensityEstimates2015_2_0.png" /> 20.600 - 23.800 people/km²<br />\
    <img src="styles/legend/PopulationDensityEstimates2015_2_1.png" /> 23.800 - 24.600 people/km²<br />\
    <img src="styles/legend/PopulationDensityEstimates2015_2_2.png" /> 24.600 - 25.600 people/km²<br />\
    <img src="styles/legend/PopulationDensityEstimates2015_2_3.png" /> 25.600 - 26.400 people/km²<br />\
    <img src="styles/legend/PopulationDensityEstimates2015_2_4.png" /> 26.400 - 30,800 people/km²<br />'
        });
var lyr_FloodproneAreas_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "Flood-prone Areas",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/FloodproneAreas_3.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [11892114.281314, -707711.388545, 11893850.279941, -702933.857515]
                            })
                        });
var format_Roads_4 = new ol.format.GeoJSON();
var features_Roads_4 = format_Roads_4.readFeatures(json_Roads_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Roads_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Roads_4.addFeatures(features_Roads_4);
var lyr_Roads_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Roads_4, 
                style: style_Roads_4,
                popuplayertitle: "Roads",
                interactive: false,
                title: '<img src="styles/legend/Roads_4.png" /> Roads'
            });
var format_TrainStations_5 = new ol.format.GeoJSON();
var features_TrainStations_5 = format_TrainStations_5.readFeatures(json_TrainStations_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TrainStations_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TrainStations_5.addFeatures(features_TrainStations_5);
var lyr_TrainStations_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TrainStations_5, 
                style: style_TrainStations_5,
                popuplayertitle: "Train Stations",
                interactive: true,
                title: '<img src="styles/legend/TrainStations_5.png" /> Train Stations'
            });
var format_Railway_6 = new ol.format.GeoJSON();
var features_Railway_6 = format_Railway_6.readFeatures(json_Railway_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Railway_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Railway_6.addFeatures(features_Railway_6);
var lyr_Railway_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Railway_6, 
                style: style_Railway_6,
                popuplayertitle: "Railway",
                interactive: true,
                title: '<img src="styles/legend/Railway_6.png" /> Railway'
            });
var format_LentengAgung_7 = new ol.format.GeoJSON();
var features_LentengAgung_7 = format_LentengAgung_7.readFeatures(json_LentengAgung_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LentengAgung_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LentengAgung_7.addFeatures(features_LentengAgung_7);
var lyr_LentengAgung_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LentengAgung_7, 
                style: style_LentengAgung_7,
                popuplayertitle: "Lenteng Agung",
                interactive: false,
                title: '<img src="styles/legend/LentengAgung_7.png" /> Lenteng Agung'
            });
var format_CiliwungRiver_8 = new ol.format.GeoJSON();
var features_CiliwungRiver_8 = format_CiliwungRiver_8.readFeatures(json_CiliwungRiver_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CiliwungRiver_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CiliwungRiver_8.addFeatures(features_CiliwungRiver_8);
var lyr_CiliwungRiver_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CiliwungRiver_8, 
                style: style_CiliwungRiver_8,
                popuplayertitle: "Ciliwung River",
                interactive: false,
                title: '<img src="styles/legend/CiliwungRiver_8.png" /> Ciliwung River'
            });
var format_FieldworkAreas_9 = new ol.format.GeoJSON();
var features_FieldworkAreas_9 = format_FieldworkAreas_9.readFeatures(json_FieldworkAreas_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FieldworkAreas_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FieldworkAreas_9.addFeatures(features_FieldworkAreas_9);
var lyr_FieldworkAreas_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FieldworkAreas_9, 
                style: style_FieldworkAreas_9,
                popuplayertitle: "Fieldwork Areas",
                interactive: true,
                title: '<img src="styles/legend/FieldworkAreas_9.png" /> Fieldwork Areas'
            });

lyr_SateliteImage_0.setVisible(true);lyr_ElevationinmetersbasedonALOSWorld3D30m_1.setVisible(true);lyr_PopulationDensityEstimates2015_2.setVisible(true);lyr_FloodproneAreas_3.setVisible(true);lyr_Roads_4.setVisible(true);lyr_TrainStations_5.setVisible(true);lyr_Railway_6.setVisible(true);lyr_LentengAgung_7.setVisible(true);lyr_CiliwungRiver_8.setVisible(true);lyr_FieldworkAreas_9.setVisible(true);
var layersList = [lyr_SateliteImage_0,lyr_ElevationinmetersbasedonALOSWorld3D30m_1,lyr_PopulationDensityEstimates2015_2,lyr_FloodproneAreas_3,lyr_Roads_4,lyr_TrainStations_5,lyr_Railway_6,lyr_LentengAgung_7,lyr_CiliwungRiver_8,lyr_FieldworkAreas_9];
lyr_PopulationDensityEstimates2015_2.set('fieldAliases', {'suitable': 'suitable', 'PopDensity': 'PopDensity', 'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'UUPP': 'UUPP', 'LUAS': 'LUAS', 'Per km2': 'Per km2', });
lyr_Roads_4.set('fieldAliases', {'osm_id': 'osm_id', 'smoothness': 'smoothness', 'surface': 'surface', 'oneway': 'oneway', 'lanes': 'lanes', 'layer': 'layer', 'highway': 'highway', 'name': 'name', 'bridge': 'bridge', 'source': 'source', 'width': 'width', });
lyr_TrainStations_5.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FGSSTA': 'FGSSTA', 'KLSSTA': 'KLSSTA', 'FCODE': 'FCODE', 'KODKOD': 'KODKOD', 'WILSTA': 'WILSTA', 'DOPSTA': 'DOPSTA', 'KMTSTA': 'KMTSTA', 'LINSTA': 'LINSTA', 'KONKON': 'KONKON', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_Railway_6.set('fieldAliases', {'FCODE': 'FCODE', 'TIPREL': 'TIPREL', 'JMLREL': 'JMLREL', 'KMXREL': 'KMXREL', 'KLSREL': 'KLSREL', 'REMARK': 'REMARK', 'NAMOBJ': 'NAMOBJ', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_LentengAgung_7.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'UUPP': 'UUPP', 'LUAS': 'LUAS', 'area_km2': 'area_km2', });
lyr_CiliwungRiver_8.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'TIPSNG': 'TIPSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'STATUS': 'STATUS', 'WMAX': 'WMAX', 'DBTMAX': 'DBTMAX', 'SLPRT': 'SLPRT', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_FieldworkAreas_9.set('fieldAliases', {'id': 'id', 'RW': 'RW', 'RT': 'RT', 'name': 'name', 'Interview': 'Interview', 'Elevation': 'Elevation', 'AvgPopDens': 'AvgPopDens', 'Pov.Rate': 'Pov.Rate', });
lyr_PopulationDensityEstimates2015_2.set('fieldImages', {'suitable': '', 'PopDensity': '', 'OBJECTID': '', 'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'METADATA': '', 'SRS_ID': '', 'KDBBPS': '', 'KDCBPS': '', 'KDCPUM': '', 'KDEBPS': '', 'KDEPUM': '', 'KDPBPS': '', 'KDPKAB': '', 'KDPPUM': '', 'LUASWH': '', 'TIPADM': '', 'WADMKC': '', 'WADMKD': '', 'WADMKK': '', 'WADMPR': '', 'WIADKC': '', 'WIADKK': '', 'WIADPR': '', 'WIADKD': '', 'UUPP': '', 'LUAS': '', 'Per km2': '', });
lyr_Roads_4.set('fieldImages', {'osm_id': '', 'smoothness': '', 'surface': '', 'oneway': '', 'lanes': '', 'layer': '', 'highway': '', 'name': '', 'bridge': '', 'source': '', 'width': '', });
lyr_TrainStations_5.set('fieldImages', {'NAMOBJ': '', 'FGSSTA': '', 'KLSSTA': '', 'FCODE': '', 'KODKOD': '', 'WILSTA': '', 'DOPSTA': '', 'KMTSTA': '', 'LINSTA': '', 'KONKON': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', });
lyr_Railway_6.set('fieldImages', {'FCODE': '', 'TIPREL': '', 'JMLREL': '', 'KMXREL': '', 'KLSREL': '', 'REMARK': '', 'NAMOBJ': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'SHAPE_Leng': '', });
lyr_LentengAgung_7.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDPBPS': 'TextEdit', 'KDPKAB': 'TextEdit', 'KDPPUM': 'TextEdit', 'LUASWH': 'TextEdit', 'TIPADM': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADKC': 'TextEdit', 'WIADKK': 'TextEdit', 'WIADPR': 'TextEdit', 'WIADKD': 'TextEdit', 'UUPP': 'TextEdit', 'LUAS': 'TextEdit', 'area_km2': '', });
lyr_CiliwungRiver_8.set('fieldImages', {'NAMOBJ': '', 'TIPSNG': '', 'KLSSNG': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'NAMWS': '', 'NAMDAS': '', 'STATUS': '', 'WMAX': '', 'DBTMAX': '', 'SLPRT': '', 'SHAPE_Leng': '', });
lyr_FieldworkAreas_9.set('fieldImages', {'id': 'TextEdit', 'RW': 'TextEdit', 'RT': 'TextEdit', 'name': 'TextEdit', 'Interview': 'TextEdit', 'Elevation': 'TextEdit', 'AvgPopDens': 'TextEdit', 'Pov.Rate': 'TextEdit', });
lyr_PopulationDensityEstimates2015_2.set('fieldLabels', {'suitable': 'no label', 'PopDensity': 'no label', 'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'KDBBPS': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDPBPS': 'no label', 'KDPKAB': 'no label', 'KDPPUM': 'no label', 'LUASWH': 'no label', 'TIPADM': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'WIADKC': 'no label', 'WIADKK': 'no label', 'WIADPR': 'no label', 'WIADKD': 'no label', 'UUPP': 'no label', 'LUAS': 'no label', 'Per km2': 'no label', });
lyr_Roads_4.set('fieldLabels', {'osm_id': 'header label - visible with data', 'smoothness': 'no label', 'surface': 'no label', 'oneway': 'no label', 'lanes': 'no label', 'layer': 'no label', 'highway': 'no label', 'name': 'no label', 'bridge': 'no label', 'source': 'no label', 'width': 'no label', });
lyr_TrainStations_5.set('fieldLabels', {'NAMOBJ': 'header label - visible with data', 'FGSSTA': 'no label', 'KLSSTA': 'no label', 'FCODE': 'no label', 'KODKOD': 'no label', 'WILSTA': 'no label', 'DOPSTA': 'no label', 'KMTSTA': 'no label', 'LINSTA': 'no label', 'KONKON': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_Railway_6.set('fieldLabels', {'FCODE': 'no label', 'TIPREL': 'no label', 'JMLREL': 'no label', 'KMXREL': 'no label', 'KLSREL': 'no label', 'REMARK': 'no label', 'NAMOBJ': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', });
lyr_LentengAgung_7.set('fieldLabels', {'OBJECTID': 'header label - visible with data', 'NAMOBJ': 'hidden field', 'FCODE': 'hidden field', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'KDBBPS': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDPBPS': 'no label', 'KDPKAB': 'no label', 'KDPPUM': 'no label', 'LUASWH': 'no label', 'TIPADM': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'WIADKC': 'no label', 'WIADKK': 'no label', 'WIADPR': 'no label', 'WIADKD': 'no label', 'UUPP': 'no label', 'LUAS': 'no label', 'area_km2': 'no label', });
lyr_CiliwungRiver_8.set('fieldLabels', {'NAMOBJ': 'header label - visible with data', 'TIPSNG': 'no label', 'KLSSNG': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'NAMWS': 'no label', 'NAMDAS': 'no label', 'STATUS': 'no label', 'WMAX': 'no label', 'DBTMAX': 'no label', 'SLPRT': 'no label', 'SHAPE_Leng': 'no label', });
lyr_FieldworkAreas_9.set('fieldLabels', {'id': 'no label', 'RW': 'no label', 'RT': 'no label', 'name': 'header label - always visible', 'Interview': 'header label - visible with data', 'Elevation': 'header label - visible with data', 'AvgPopDens': 'header label - visible with data', 'Pov.Rate': 'header label - visible with data', });
lyr_FieldworkAreas_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});