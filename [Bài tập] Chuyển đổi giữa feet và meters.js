function main1() {
    var meter = parseInt(document.getElementById("numberA").value);
    var foot = parseInt(document.getElementById("numberB").value);
    var calculatedMeter = 0.305 * foot;
    document.write(" ket qua la : " + calculatedMeter);

}

function main2() {
    var meter = parseInt(document.getElementById("numberA").value);
    var foot = parseInt(document.getElementById("numberB").value);
    var calculatedFoot = 3.279 * meter;
    document.write(" ket qua la : " + calculatedFoot);
}
