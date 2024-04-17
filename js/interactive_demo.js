var video1_path = '';
var video2_path = '';

var prev_video1_path = 'none';
var prev_video2_path = 'none';

function loadVideo(is_end) {
    var video1 = document.getElementById('video-player1');
    var video2 = document.getElementById('video-player2');
    var video_src1 = document.getElementById('video-src1');
    var video_src2 = document.getElementById('video-src2');

    var width = document.getElementById('container').clientWidth;
    var height = width / 768 * 432;
    video1.style.width = '' + width + 'px';
    video2.style.width = '' + width + 'px';
    video1.style.height = '' + height + 'px';
    video2.style.height = '' + height + 'px';
    
    video1.pause();
    video2.pause();
    if(prev_video1_path != video1_path) {
        video_src1.setAttribute('src', video1_path);
        video1.load();
    }
    if(prev_video2_path != video2_path) {
        video_src2.setAttribute('src', video2_path);
        video2.load();
    }
    prev_video1_path = video1_path;
    prev_video2_path = video2_path;
    
    video1.currentTime = 0;
    video2.currentTime = 0;
    
    video1.playbackRate = 1.6;
    video2.playbackRate = 1.6;
    
    video1.play();
    video2.play();        
}


function set_inactive(btn) {
    btn.classList.remove('is-info');
}
function set_active(btn) {
    btn.classList.add('is-info');
}

function showSelected() {

    // section 1: sample
    var sample_video_btns = document.getElementsByClassName('btn-sample-video');
    for(var i = 0; i < sample_video_btns.length; i++) {
        set_inactive(sample_video_btns[i]);
    }
    selected_index = ['sample-easy', 'sample-medium', 'sample-hard'].indexOf(selected_sample_video);
    set_active(sample_video_btns[selected_index]);

    // section 2: comparison

    var comp_video_btns = document.getElementsByClassName('btn-comp-video');
    for(var i = 0; i < comp_video_btns.length; i++) {
        set_inactive(comp_video_btns[i]);
    }
    selected_index = ['two-people', 'three-people', 'three-people-family', 'four-people'].indexOf(selected_compare_video);
    set_active(comp_video_btns[selected_index]);

    var comp_method_btns = document.getElementsByClassName('btn-comp-method');
    for(var i = 0; i < comp_method_btns.length; i++) {
        set_inactive(comp_method_btns[i]);
    }
    selected_index = ['input', 'instmatt', 'sparsemat_hr', 'gm_single_tcvom', 'mgm_stacked_tcvom'].indexOf(selected_compare_method);
    set_active(comp_method_btns[selected_index]);
}

/* Section 2: Visual comparison with baseline methods and SOTA */

var selected_compare_video = 'three-people';
var selected_compare_method = 'input';
var comp1_path = '';
var comp2_path = '';

function selectComparisonVideo(video) {
    selected_compare_video = video;
    update_comparison_source();
    showSelected();
}

function selectComparedMethod(method) {
    selected_compare_method = method;
    update_comparison_source();
    showSelected();
}

let method_full_names = {
    'input': 'Input',
    'instmatt': 'InstMatt (Sun et al., CVPR 2022)',
    'sparsemat_hr': 'SparseMat (Sun et al., CVPR 2023)',
    'mgm_single_tcvom': 'MGM (Yu et al., CVPR 2021)</br>+ TCVOM (Zhang et al., MM 2021)',
    'mgm_stacked_tcvom': 'MGM* (with stacked masks) </br>+ TCVOM (Zhang et al., MM 2021)',
};

function update_comparison_source() {
    comp1_path = 'videos/' + selected_compare_video + '/' + selected_compare_method + '.mp4';
    comp2_path = 'videos/' + selected_compare_video + '/ours.mp4';

    loadComparison(false);
    document.getElementById('comparison-caption').innerHTML = method_full_names[selected_compare_method];
}

var prev_comp1_path = 'none';
var prev_comp2_path = 'none';
function loadComparison() {
    var video1 = document.getElementById('comparison-player1');
    var video2 = document.getElementById('comparison-player2');
    var video_src1 = document.getElementById('comparison-src1');
    var video_src2 = document.getElementById('comparison-src2');
    
    video1.pause();
    video2.pause();
    if(prev_comp1_path != comp1_path) {
        video_src1.setAttribute('src', comp1_path);
        video1.load();
    }
    if(prev_comp2_path != comp2_path) {
        video_src2.setAttribute('src', comp2_path);
        video2.load();
    }
    prev_comp1_path = comp1_path;
    prev_comp2_path = comp2_path;

    video1.currentTime = 0;
    video2.currentTime = 0;

    video1.playbackRate = 1.6;
    video2.playbackRate = 1.6;
    video1.play();
    video2.play();
}

function update_comparison_source() {
    comp1_path = 'videos/' + selected_compare_video + '/' + selected_compare_method + '.mp4';
    comp2_path = 'videos/' + selected_compare_video + '/ours.mp4';

    loadComparison(false);
    document.getElementById('comparison-caption').innerHTML = method_full_names[selected_compare_method];
}

var selected_sample_video = 'sample-hard';
var sample_vid_path = '';
var sample_matte_path = '';

function selectSampleVideo(video) {
    selected_sample_video = video;
    update_sample_source();
    showSelected();
}

function update_sample_source() {
    sample_vid_path = 'videos/' + selected_sample_video + '/input.mp4';
    sample_matte_path = 'videos/' + selected_sample_video + '/matte.mp4';
    loadSample(false);
}

var prev_sample_vid_path = 'none';
var prev_sample_matte_path = 'none';
function loadSample() {
    var video1 = document.getElementById('sample-player1');
    var video2 = document.getElementById('sample-player2');
    var video_src1 = document.getElementById('sample-src1');
    var video_src2 = document.getElementById('sample-src2');
    
    video1.pause();
    video2.pause();
    if(prev_sample_vid_path != sample_vid_path) {
        video_src1.setAttribute('src', sample_vid_path);
        video1.load();
    }
    if(prev_sample_matte_path != sample_matte_path) {
        video_src2.setAttribute('src', sample_matte_path);
        video2.load();
    }
    prev_sample_vid_path = sample_vid_path;
    prev_sample_matte_path = sample_matte_path;

    video1.currentTime = 0;
    video2.currentTime = 0;

    video1.playbackRate = 1.6;
    video2.playbackRate = 1.6;
    video1.play();
    video2.play();
}

function loadTeaser() {
    var video = document.getElementById('teaser-player');
    video.play();
}