<html>
	<head>
			<title>Motiv8</title>
			<link rel="stylesheet" type="text/css"href="style.css">
	</head>
	<body>
		<div id="myDiv">
			<h1>Your Tasks</h1>
			<div class="task-contain">
				<ul id="list" class="form">
					<li class="text-std">potatoes</li>
				</ul>
			</div>
			<button class="button" style="width:100px;margin:30px" onclick="hideFirst()">Create task</a></button>
		</div>


		<script>
			function hideFirst() {
			var x = document.getElementById("myDiv");
			var y = document.getElementById("baseform")
			if (x.style.display === "none") {
				x.style.display = "block";
			}
			else {
				x.style.display = "none";
				y.style.display = "block";
			}
		}
		</script>
	</body>

	<html>
	<head>
	<title>Motiv8</title>
            <link rel="stylesheet" type="text/css"href="style.css">
		<!-- Load the jQuery library, which we'll use to manipulate HTML elements with Javascript. -->
    	<script src="https://code.jquery.com/jquery-2.2.0.min.js"></script>
    	<!-- Load the Firebase library before loading the body. -->
	    <script src="https://www.gstatic.com/firebasejs/3.1.0/firebase.js"></script>

	    <!-- Load the jQuery library, which we'll use to manipulate HTML elements with Javascript. -->
	    <script src="https://code.jquery.com/jquery-2.2.0.min.js"></script>
	</head>

	<body>
		<script src="createTask.js"></script>

		<div class="content-formbox" id="baseform" style="display:none">
			<form id="submitTask" class="forms">
				<p class="text-std">Task Name:<br>
					<input type="text" id="name" class="input-boxes-std"><br><br>					
					Amount:<br>
					<input type="number" id="amount" class="input-boxes-std"><br><br>
					Due Date:<br>
					<input type="date" id="dueDate" class="input-boxes-std"><br><br>
					Due Time:<br>
					<input type="time" id="time" class="input-boxes-std"><br><br>
					<button id="submit" onclick="hideFirst()" class="button">Submit</button>
					<button id="cancel" onclick="hideFirst()" class="button">Cancel</button>
				</p>

			</form>
		</div>

	</body>

</html>

</html>
