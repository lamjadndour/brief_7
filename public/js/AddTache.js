$(document).ready(function () {
    // Load Data
    getData();

    // Save tache
    $("#SaveData").click(function () {

        var name = $("#name").val();
        var Description = $("#Description").val();
        var price = $("#Status").val();
        var img = $("#img").val();

        if (name != "" && Description != "" && price != "" && img != "") { // check les valeurs 
            $.ajax({
                url: '/AddTask',
                type: 'post',
                data: {
                    name,
                    Description,
                    price,
                    img
                },
                success: function (response) {
                    if (response.request) {
                        //send fetched
                        getData(response);
                        //remove what was writting in input
                        $("#name").val('');
                        $("#Description").val('');
                        $("#Status").val('');
                        $("#img").val('');
                    }
                }
            });
        }
    });
});


function getData(fetched) {
    if (fetched === undefined) {
        $.ajax({
            url: '/Tache',
            type: 'get',
            success: function (response) {
                if (response.request) {
                    // data correc
                    AddCards(response.data);
                }
            },
        });
    } else {
        AddCards(fetched.data);
    }
}

function AddCards(data) {

    var tache_Data = '';
    $("#Tache").html(tache_Data);
    $.each(data, function (index, value) {

        tache_Data += '<div class="product">';
        tache_Data += '<div class="all">';
        tache_Data += '<div class="product-card">';
        tache_Data += '<h1>' + value.name + '</h1>';
        tache_Data += '<p>' + value.Description + '</p><br/>';
        tache_Data += '<img src="' + value.img + ' ">';
        tache_Data += '<div class="product-info">';
        tache_Data += '<div class="product-price">' + value.price + '</div>';
        tache_Data += '<div class="aa">';
        tache_Data += `<a class="product-button" type="button" data-toggle="modal" data-target="#UpdatePopUp" data-uid="1" onclick="show(${index},'${value.name}','${value.Description}','${value.Status}','${value.img}')" class="update btn btn-warning btn-sm">Update</a>`;
        tache_Data += ' <a class="product-button" type="button" data-toggle="modal" data-target="#DeletePopUp" data-uid="1" onclick="show(' + index + ')"  class="update btn btn-warning btn-sm">Delete</a>';
        tache_Data += '</div>';
        tache_Data += '</div>';
        tache_Data += '</div>';
        tache_Data += '</div>';
        tache_Data += '</div>';
    });
    $("#Tache").append(tache_Data);


}

function show(index, name, Description, price, img) {
    localStorage.setItem("id", index);
    $("#nameUpdate").val(name);
    $("#DescriptionUpdate").val(Description);
    $("#StatusUpdate").val(price);
    $("#imgUpdate").val(img);

}