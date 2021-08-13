 UPDATE movies 
	SET	 in_theaters = $2
	WHERE id = $1;

    SELECT * FROM movies
    WHERE id = $1;