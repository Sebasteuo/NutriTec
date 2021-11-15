package com.example.nutritec;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.ListView;
import android.widget.TextView;
import android.widget.Toast;

import java.awt.font.TextAttribute;

public class add_receta extends AppCompatActivity {

    private ListView lvIng;
    private TextView tvingr;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_add_receta);
        String [] ingredientes={"Pan","cereal","yogurt","Cafe","Leche","jugo Naranja","batido","papaya","melon","manzana","kiwi",
                "Arroz","Frijoles","Macarrones","Pure","Picadillo","Sopa", "bistek", "pollo","refresco","Cafe","Te","Galleta","Pan","Tamal"};

        tvingr= (TextView)findViewById(R.id.tv_ingredientes);


        lvIng=(ListView)findViewById(R.id.list_ingredients);
        ArrayAdapter <String> adapter_ingre= new ArrayAdapter<String>(this,R.layout.list_item,ingredientes);
        lvIng.setAdapter(adapter_ingre);

        lvIng.setOnItemClickListener(new AdapterView.OnItemClickListener() {
            @Override
            public void onItemClick(AdapterView<?> parent, View view, int position, long id) {
                String sele = ingredientes[position];
                String dato = tvingr.getText().toString();
                tvingr.setText(dato + "\n" + sele);
            }
        });
    }


    public void agrega(View view){
        Intent agrega = new Intent(this, principal.class);
        Toast.makeText(this,"Receta agregada",Toast.LENGTH_SHORT).show();
        this.finish();
        startActivity(agrega);
    }
}