<?php
$navHome = true;
include($_SERVER['DOCUMENT_ROOT'] . '/includes/head.php');
include($_SERVER['DOCUMENT_ROOT'] . '/includes/header.php');
include($_SERVER['DOCUMENT_ROOT'] . '/includes/navbar.php');
include($_SERVER['DOCUMENT_ROOT'] . '/includes/lang/lang.php');

?>
<div class="Aside2Col">
    <div class="Aside">
        <p class="AsideTitle">Welcome</p>
<?php
include($_SERVER['DOCUMENT_ROOT'] . '/includes/lang/welcome_' . $lang);
?>
    </div>
    <div class="LatestEvents">
        <p class="LatestEventsTitle">Latest Information</p>
        <div class="LatestEventsContainer">
            <div class="LatestEvent">
                <p class="LatestEventDesc">January 15, 2021<br /><strong>Ruling</strong><br /><a href="/rulings/">Application for <em>In Camera</em> Hearing – Ruling #24</a></p>
            </div>
            <div class="LatestEvent">
                <p class="LatestEventDesc">December 15, 2020<br /><strong>Ruling</strong><br /><a href="/rulings/">Application for Redactions – Ruling #23</a></p>
            </div>
            <div class="LatestEvent">
                <p class="LatestEventDesc">December 10, 2020<br /><strong>News Release</strong><br /><a href="/media/?open=23">Interim Report Released</a></p>
            </div>
        </div>
    </div>
</div>
<br class="ClearFloats" />
<div class="ButtonBar">
    <a href="/?ln=fre" class="LanguageLink"><button class="Button TonedDownButton SmallerButtonLabel ButtonBarButton LanguageButton">French</button></a>
    <a href="/?ln=chi" class="LanguageLink"><button class="Button TonedDownButton SmallerButtonLabel ButtonBarButton LanguageButton">Chinese</button></a>
    <a href="/?ln=pan" class="LanguageLink"><button class="Button TonedDownButton SmallerButtonLabel ButtonBarButton LanguageButton">Punjabi</button></a>
    <a href="/?ln=ara" class="LanguageLink"><button class="Button TonedDownButton SmallerButtonLabel ButtonBarButton LanguageButton">Arabic</button></a>
    <a href="/?ln=fas" class="LanguageLink"><button class="Button TonedDownButton SmallerButtonLabel ButtonBarButton LanguageButton">Farsi</button></a>
    <a href="/?ln=kor" class="LanguageLink"><button class="Button TonedDownButton SmallerButtonLabel ButtonBarButton LanguageButton">Korean</button></a>
    <a href="/?ln=fil" class="LanguageLink"><button class="Button TonedDownButton SmallerButtonLabel ButtonBarButton LanguageButton">Filipino</button></a>
</div>
<?php
include($_SERVER['DOCUMENT_ROOT'] . '/includes/lang/home_' . $lang);
include($_SERVER['DOCUMENT_ROOT'] . '/includes/footer.php');
?>