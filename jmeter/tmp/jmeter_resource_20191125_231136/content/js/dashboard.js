/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
var showControllersOnly = false;
var seriesFilter = "";
var filtersOnlySampleSeries = true;

/*
 * Add header in statistics table to group metrics by category
 * format
 *
 */
function summaryTableHeader(header) {
    var newRow = header.insertRow(-1);
    newRow.className = "tablesorter-no-sort";
    var cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 1;
    cell.innerHTML = "Requests";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 3;
    cell.innerHTML = "Executions";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 6;
    cell.innerHTML = "Response Times (ms)";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 1;
    cell.innerHTML = "Throughput";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 2;
    cell.innerHTML = "Network (KB/sec)";
    newRow.appendChild(cell);
}

/*
 * Populates the table identified by id parameter with the specified data and
 * format
 *
 */
function createTable(table, info, formatter, defaultSorts, seriesIndex, headerCreator) {
    var tableRef = table[0];

    // Create header and populate it with data.titles array
    var header = tableRef.createTHead();

    // Call callback is available
    if(headerCreator) {
        headerCreator(header);
    }

    var newRow = header.insertRow(-1);
    for (var index = 0; index < info.titles.length; index++) {
        var cell = document.createElement('th');
        cell.innerHTML = info.titles[index];
        newRow.appendChild(cell);
    }

    var tBody;

    // Create overall body if defined
    if(info.overall){
        tBody = document.createElement('tbody');
        tBody.className = "tablesorter-no-sort";
        tableRef.appendChild(tBody);
        var newRow = tBody.insertRow(-1);
        var data = info.overall.data;
        for(var index=0;index < data.length; index++){
            var cell = newRow.insertCell(-1);
            cell.innerHTML = formatter ? formatter(index, data[index]): data[index];
        }
    }

    // Create regular body
    tBody = document.createElement('tbody');
    tableRef.appendChild(tBody);

    var regexp;
    if(seriesFilter) {
        regexp = new RegExp(seriesFilter, 'i');
    }
    // Populate body with data.items array
    for(var index=0; index < info.items.length; index++){
        var item = info.items[index];
        if((!regexp || filtersOnlySampleSeries && !info.supportsControllersDiscrimination || regexp.test(item.data[seriesIndex]))
                &&
                (!showControllersOnly || !info.supportsControllersDiscrimination || item.isController)){
            if(item.data.length > 0) {
                var newRow = tBody.insertRow(-1);
                for(var col=0; col < item.data.length; col++){
                    var cell = newRow.insertCell(-1);
                    cell.innerHTML = formatter ? formatter(col, item.data[col]) : item.data[col];
                }
            }
        }
    }

    // Add support of columns sort
    table.tablesorter({sortList : defaultSorts});
}

$(document).ready(function() {

    // Customize table sorter default options
    $.extend( $.tablesorter.defaults, {
        theme: 'blue',
        cssInfoBlock: "tablesorter-no-sort",
        widthFixed: true,
        widgets: ['zebra']
    });

    var data = {"OkPercent": 99.99750006249843, "KoPercent": 0.002499937501562461};
    var dataset = [
        {
            "label" : "KO",
            "data" : data.KoPercent,
            "color" : "#FF6347"
        },
        {
            "label" : "OK",
            "data" : data.OkPercent,
            "color" : "#9ACD32"
        }];
    $.plot($("#flot-requests-summary"), dataset, {
        series : {
            pie : {
                show : true,
                radius : 1,
                label : {
                    show : true,
                    radius : 3 / 4,
                    formatter : function(label, series) {
                        return '<div style="font-size:8pt;text-align:center;padding:2px;color:white;">'
                            + label
                            + '<br/>'
                            + Math.round10(series.percent, -2)
                            + '%</div>';
                    },
                    background : {
                        opacity : 0.5,
                        color : '#000'
                    }
                }
            }
        },
        legend : {
            show : true
        }
    });

    // Creates APDEX table
    createTable($("#apdexTable"), {"supportsControllersDiscrimination": true, "overall": {"data": [0.4303142421439464, 500, 1500, "Total"], "isController": false}, "titles": ["Apdex", "T (Toleration threshold)", "F (Frustration threshold)", "Label"], "items": [{"data": [0.4303142421439464, 500, 1500, "HTTP Request"], "isController": false}]}, function(index, item){
        switch(index){
            case 0:
                item = item.toFixed(3);
                break;
            case 1:
            case 2:
                item = formatDuration(item);
                break;
        }
        return item;
    }, [[0, 0]], 3);

    // Create statistics table
    createTable($("#statisticsTable"), {"supportsControllersDiscrimination": true, "overall": {"data": ["Total", 40001, 1, 0.002499937501562461, 1331.6335591610168, 0, 5482, 1198.0, 1272.0, 2073.9900000000016, 71.57017459107614, 9.11089658301217, 1119.207028440382], "isController": false}, "titles": ["Label", "#Samples", "KO", "Error %", "Average", "Min", "Max", "90th pct", "95th pct", "99th pct", "Transactions\/s", "Received", "Sent"], "items": [{"data": ["HTTP Request", 40001, 1, 0.002499937501562461, 1331.6335591610168, 0, 5482, 1198.0, 1272.0, 2073.9900000000016, 71.57017459107614, 9.11089658301217, 1119.207028440382], "isController": false}]}, function(index, item){
        switch(index){
            // Errors pct
            case 3:
                item = item.toFixed(2) + '%';
                break;
            // Mean
            case 4:
            // Mean
            case 7:
            // Percentile 1
            case 8:
            // Percentile 2
            case 9:
            // Percentile 3
            case 10:
            // Throughput
            case 11:
            // Kbytes/s
            case 12:
            // Sent Kbytes/s
                item = item.toFixed(2);
                break;
        }
        return item;
    }, [[0, 0]], 0, summaryTableHeader);

    // Create error table
    createTable($("#errorsTable"), {"supportsControllersDiscrimination": false, "titles": ["Type of error", "Number of errors", "% in errors", "% in all samples"], "items": [{"data": ["Non HTTP response code: java.net.URISyntaxException\/Non HTTP response message: Illegal character in query at index 52: http:\\\/\\\/localhost:8983\\\/solr\\\/unify\\\/select?facet.field={!ex%3D&quot;CURRICULUM_lft&quot;}CURRICULUM$ancestor_id&amp;fl=ITEM_BANK$id,LAST_EDIT_USER$last_name,ORGANIZATION$id,type,CURRICULUM$ancestor_id,RESOURCE$word_count,score,CURRICULUM$curriculum_code,RESOURCE$id,ITEM_ATTRIBUTE_TYPE$code,ASSESSMENT_ITEM$high_stakes_organization_id,id,ASSESSMENT_ITEM$id,ITEM_SOURCE$id,ASSIGNED_USER$first_name,ITEM_ATTRIBUTE$id,RESOURCE$lexile,RESOURCE$mime_type,RESOURCE$search_text,LAST_EDIT_TIMESTAMP,grade_level,RESOURCE$moniker,ASSESSMENT_ITEM$text,ASSESSMENT_ITEM$state,ASSESSMENT_ITEM$label,ASSESSMENT_ITEM$interaction_type,db_link_id,CREATE_USER$first_name,CREATE_USER$id,RESOURCE$topic,ORGANIZATION$moniker,softDeleteFlag,ASSESSMENT_ITEM$title,CURRICULUM$lft,ASSIGNED_USER$id,CURRICULUM$id,ITEM_ATTRIBUTE_TYPE$id,ASSESSMENT_ITEM$times_used,ITEM_ATTRIBUTE_TYPE$description,RESOURCE$numeric_id,ITEM_ATTRIBUTE$moniker,ITEM_SOURCE$moniker,LAST_EDIT_USER$first_name,ASSIGNED_USER$last_name,CREATE_TIMESTAMP,ORGANIZATION$abbreviation,RESOURCE$subject,ITEM_ATTRIBUTE_TYPE$moniker,RESOURCE$resource_type,ITEM_ATTRIBUTE$code,LAST_EDIT_USER$id,ITEM_BANK$moniker,RESOURCE$genre,CREATE_USER$last_name,RESOURCE$flesch_kincaid,type,id,soft_delete_flag&amp;start=0&amp;facet.missing=false&amp;fq=(*:*+NOT+ASSESSMENT_ITEM$high_stakes_organization_id:37932)&amp;fq=ORGANIZATION$id:(37932+15973+8147+)&amp;fq=(allowed_group_id:(70866+37939+112677+91941+92679+37932+17598+)+OR+allowed_group_id:37932+OR+allowed_user_id:152634)&amp;fq=soft_delete_flag:false&amp;fq=(*:*+NOT+ASSESSMENT_ITEM$outdated:true)&amp;fq={!tag%3D&quot;type&quot;}type:(ASSESSMENT_ITEM+)&amp;fq={!tag%3D&quot;ASSESSMENT_ITEM_state&quot;}ASSESSMENT_ITEM$state:ACCEPTED&amp;sort=score+desc&amp;rows=0&amp;version=2&amp;q=*&amp;facet.limit=-1&amp;qf=CREATE_USER$email^1002&amp;qf=CREATE_USER$identifier^1004&amp;qf=CREATE_USER$first_name^1001&amp;qf=CREATE_USER$last_name^1001&amp;qf=LAST_EDIT_USER$email^1002&amp;qf=LAST_EDIT_USER$identifier^1004&amp;qf=LAST_EDIT_USER$first_name^1001&amp;qf=LAST_EDIT_USER$last_name^1001&amp;qf=ASSIGNED_USER$email^10002&amp;qf=ASSIGNED_USER$identifier^10004&amp;qf=ASSIGNED_USER$first_name^10001&amp;qf=ASSIGNED_USER$last_name^10001&amp;qf=ITEM_BANK$id^10002&amp;qf=ITEM_BANK$moniker^10001&amp;qf=CURRICULUM$curriculum_code^10002&amp;qf=CURRICULUM$description^10001&amp;qf=ITEM_ATTRIBUTE$moniker^10001&amp;qf=ITEM_ATTRIBUTE_TYPE$moniker^1001&amp;qf=RESOURCE$numeric_id^10004&amp;qf=RESOURCE$moniker^10002&amp;qf=RESOURCE$text^10001&amp;qf=RESOURCE$mime_type^10001&amp;qf=RESOURCE$search_text^10001&amp;qf=ITEM_SOURCE$id^10002&amp;qf=ITEM_SOURCE$moniker^10001&amp;qf=ORGANIZATION$id^10001&amp;qf=ORGANIZATION$moniker^10001&amp;qf=ORGANIZATION$abbreviation^10001&amp;qf=ASSESSMENT_ITEM$id^100004&amp;qf=ASSESSMENT_ITEM$title^100002&amp;qf=ASSESSMENT_ITEM$label^100002&amp;qf=ASSESSMENT_ITEM$text^100001&amp;facet.mincount=1&amp;facet=true&amp;wt=json&amp;facet.sort=count", 1, 100.0, 0.002499937501562461], "isController": false}]}, function(index, item){
        switch(index){
            case 2:
            case 3:
                item = item.toFixed(2) + '%';
                break;
        }
        return item;
    }, [[1, 1]]);

        // Create top5 errors by sampler
    createTable($("#top5ErrorsBySamplerTable"), {"supportsControllersDiscrimination": false, "overall": {"data": ["Total", 40001, 1, "Non HTTP response code: java.net.URISyntaxException\/Non HTTP response message: Illegal character in query at index 52: http:\\\/\\\/localhost:8983\\\/solr\\\/unify\\\/select?facet.field={!ex%3D&quot;CURRICULUM_lft&quot;}CURRICULUM$ancestor_id&amp;fl=ITEM_BANK$id,LAST_EDIT_USER$last_name,ORGANIZATION$id,type,CURRICULUM$ancestor_id,RESOURCE$word_count,score,CURRICULUM$curriculum_code,RESOURCE$id,ITEM_ATTRIBUTE_TYPE$code,ASSESSMENT_ITEM$high_stakes_organization_id,id,ASSESSMENT_ITEM$id,ITEM_SOURCE$id,ASSIGNED_USER$first_name,ITEM_ATTRIBUTE$id,RESOURCE$lexile,RESOURCE$mime_type,RESOURCE$search_text,LAST_EDIT_TIMESTAMP,grade_level,RESOURCE$moniker,ASSESSMENT_ITEM$text,ASSESSMENT_ITEM$state,ASSESSMENT_ITEM$label,ASSESSMENT_ITEM$interaction_type,db_link_id,CREATE_USER$first_name,CREATE_USER$id,RESOURCE$topic,ORGANIZATION$moniker,softDeleteFlag,ASSESSMENT_ITEM$title,CURRICULUM$lft,ASSIGNED_USER$id,CURRICULUM$id,ITEM_ATTRIBUTE_TYPE$id,ASSESSMENT_ITEM$times_used,ITEM_ATTRIBUTE_TYPE$description,RESOURCE$numeric_id,ITEM_ATTRIBUTE$moniker,ITEM_SOURCE$moniker,LAST_EDIT_USER$first_name,ASSIGNED_USER$last_name,CREATE_TIMESTAMP,ORGANIZATION$abbreviation,RESOURCE$subject,ITEM_ATTRIBUTE_TYPE$moniker,RESOURCE$resource_type,ITEM_ATTRIBUTE$code,LAST_EDIT_USER$id,ITEM_BANK$moniker,RESOURCE$genre,CREATE_USER$last_name,RESOURCE$flesch_kincaid,type,id,soft_delete_flag&amp;start=0&amp;facet.missing=false&amp;fq=(*:*+NOT+ASSESSMENT_ITEM$high_stakes_organization_id:37932)&amp;fq=ORGANIZATION$id:(37932+15973+8147+)&amp;fq=(allowed_group_id:(70866+37939+112677+91941+92679+37932+17598+)+OR+allowed_group_id:37932+OR+allowed_user_id:152634)&amp;fq=soft_delete_flag:false&amp;fq=(*:*+NOT+ASSESSMENT_ITEM$outdated:true)&amp;fq={!tag%3D&quot;type&quot;}type:(ASSESSMENT_ITEM+)&amp;fq={!tag%3D&quot;ASSESSMENT_ITEM_state&quot;}ASSESSMENT_ITEM$state:ACCEPTED&amp;sort=score+desc&amp;rows=0&amp;version=2&amp;q=*&amp;facet.limit=-1&amp;qf=CREATE_USER$email^1002&amp;qf=CREATE_USER$identifier^1004&amp;qf=CREATE_USER$first_name^1001&amp;qf=CREATE_USER$last_name^1001&amp;qf=LAST_EDIT_USER$email^1002&amp;qf=LAST_EDIT_USER$identifier^1004&amp;qf=LAST_EDIT_USER$first_name^1001&amp;qf=LAST_EDIT_USER$last_name^1001&amp;qf=ASSIGNED_USER$email^10002&amp;qf=ASSIGNED_USER$identifier^10004&amp;qf=ASSIGNED_USER$first_name^10001&amp;qf=ASSIGNED_USER$last_name^10001&amp;qf=ITEM_BANK$id^10002&amp;qf=ITEM_BANK$moniker^10001&amp;qf=CURRICULUM$curriculum_code^10002&amp;qf=CURRICULUM$description^10001&amp;qf=ITEM_ATTRIBUTE$moniker^10001&amp;qf=ITEM_ATTRIBUTE_TYPE$moniker^1001&amp;qf=RESOURCE$numeric_id^10004&amp;qf=RESOURCE$moniker^10002&amp;qf=RESOURCE$text^10001&amp;qf=RESOURCE$mime_type^10001&amp;qf=RESOURCE$search_text^10001&amp;qf=ITEM_SOURCE$id^10002&amp;qf=ITEM_SOURCE$moniker^10001&amp;qf=ORGANIZATION$id^10001&amp;qf=ORGANIZATION$moniker^10001&amp;qf=ORGANIZATION$abbreviation^10001&amp;qf=ASSESSMENT_ITEM$id^100004&amp;qf=ASSESSMENT_ITEM$title^100002&amp;qf=ASSESSMENT_ITEM$label^100002&amp;qf=ASSESSMENT_ITEM$text^100001&amp;facet.mincount=1&amp;facet=true&amp;wt=json&amp;facet.sort=count", 1, null, null, null, null, null, null, null, null], "isController": false}, "titles": ["Sample", "#Samples", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors"], "items": [{"data": ["HTTP Request", 40001, 1, "Non HTTP response code: java.net.URISyntaxException\/Non HTTP response message: Illegal character in query at index 52: http:\\\/\\\/localhost:8983\\\/solr\\\/unify\\\/select?facet.field={!ex%3D&quot;CURRICULUM_lft&quot;}CURRICULUM$ancestor_id&amp;fl=ITEM_BANK$id,LAST_EDIT_USER$last_name,ORGANIZATION$id,type,CURRICULUM$ancestor_id,RESOURCE$word_count,score,CURRICULUM$curriculum_code,RESOURCE$id,ITEM_ATTRIBUTE_TYPE$code,ASSESSMENT_ITEM$high_stakes_organization_id,id,ASSESSMENT_ITEM$id,ITEM_SOURCE$id,ASSIGNED_USER$first_name,ITEM_ATTRIBUTE$id,RESOURCE$lexile,RESOURCE$mime_type,RESOURCE$search_text,LAST_EDIT_TIMESTAMP,grade_level,RESOURCE$moniker,ASSESSMENT_ITEM$text,ASSESSMENT_ITEM$state,ASSESSMENT_ITEM$label,ASSESSMENT_ITEM$interaction_type,db_link_id,CREATE_USER$first_name,CREATE_USER$id,RESOURCE$topic,ORGANIZATION$moniker,softDeleteFlag,ASSESSMENT_ITEM$title,CURRICULUM$lft,ASSIGNED_USER$id,CURRICULUM$id,ITEM_ATTRIBUTE_TYPE$id,ASSESSMENT_ITEM$times_used,ITEM_ATTRIBUTE_TYPE$description,RESOURCE$numeric_id,ITEM_ATTRIBUTE$moniker,ITEM_SOURCE$moniker,LAST_EDIT_USER$first_name,ASSIGNED_USER$last_name,CREATE_TIMESTAMP,ORGANIZATION$abbreviation,RESOURCE$subject,ITEM_ATTRIBUTE_TYPE$moniker,RESOURCE$resource_type,ITEM_ATTRIBUTE$code,LAST_EDIT_USER$id,ITEM_BANK$moniker,RESOURCE$genre,CREATE_USER$last_name,RESOURCE$flesch_kincaid,type,id,soft_delete_flag&amp;start=0&amp;facet.missing=false&amp;fq=(*:*+NOT+ASSESSMENT_ITEM$high_stakes_organization_id:37932)&amp;fq=ORGANIZATION$id:(37932+15973+8147+)&amp;fq=(allowed_group_id:(70866+37939+112677+91941+92679+37932+17598+)+OR+allowed_group_id:37932+OR+allowed_user_id:152634)&amp;fq=soft_delete_flag:false&amp;fq=(*:*+NOT+ASSESSMENT_ITEM$outdated:true)&amp;fq={!tag%3D&quot;type&quot;}type:(ASSESSMENT_ITEM+)&amp;fq={!tag%3D&quot;ASSESSMENT_ITEM_state&quot;}ASSESSMENT_ITEM$state:ACCEPTED&amp;sort=score+desc&amp;rows=0&amp;version=2&amp;q=*&amp;facet.limit=-1&amp;qf=CREATE_USER$email^1002&amp;qf=CREATE_USER$identifier^1004&amp;qf=CREATE_USER$first_name^1001&amp;qf=CREATE_USER$last_name^1001&amp;qf=LAST_EDIT_USER$email^1002&amp;qf=LAST_EDIT_USER$identifier^1004&amp;qf=LAST_EDIT_USER$first_name^1001&amp;qf=LAST_EDIT_USER$last_name^1001&amp;qf=ASSIGNED_USER$email^10002&amp;qf=ASSIGNED_USER$identifier^10004&amp;qf=ASSIGNED_USER$first_name^10001&amp;qf=ASSIGNED_USER$last_name^10001&amp;qf=ITEM_BANK$id^10002&amp;qf=ITEM_BANK$moniker^10001&amp;qf=CURRICULUM$curriculum_code^10002&amp;qf=CURRICULUM$description^10001&amp;qf=ITEM_ATTRIBUTE$moniker^10001&amp;qf=ITEM_ATTRIBUTE_TYPE$moniker^1001&amp;qf=RESOURCE$numeric_id^10004&amp;qf=RESOURCE$moniker^10002&amp;qf=RESOURCE$text^10001&amp;qf=RESOURCE$mime_type^10001&amp;qf=RESOURCE$search_text^10001&amp;qf=ITEM_SOURCE$id^10002&amp;qf=ITEM_SOURCE$moniker^10001&amp;qf=ORGANIZATION$id^10001&amp;qf=ORGANIZATION$moniker^10001&amp;qf=ORGANIZATION$abbreviation^10001&amp;qf=ASSESSMENT_ITEM$id^100004&amp;qf=ASSESSMENT_ITEM$title^100002&amp;qf=ASSESSMENT_ITEM$label^100002&amp;qf=ASSESSMENT_ITEM$text^100001&amp;facet.mincount=1&amp;facet=true&amp;wt=json&amp;facet.sort=count", 1, null, null, null, null, null, null, null, null], "isController": false}]}, function(index, item){
        return item;
    }, [[0, 0]], 0);

});
