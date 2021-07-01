/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.api;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;

/**
 *
 * @author acer
 */
public class DBApi {

    static Connection con;
    static ResultSet rs;

    public static JSONArray getClassicDataById(String id) {
        JSONArray ja = new JSONArray();
        int index = 0;
        int ada = 0;
        try {
            con = ConMan.getConnection();
            String sql = "select * from getstaff where id= ?";
            PreparedStatement ps = con.prepareStatement(sql);
            ps.setString(1, id);
            rs = ps.executeQuery();
            while (rs.next()) {
                ada = 1;
                JSONObject jo = new JSONObject();
                jo.put("id", rs.getString("id"));
                jo.put("email", rs.getString("email"));
                ja.add(index++, jo);
            }
            if (ada == 1) {//ada data notes
                JSONObject jo = new JSONObject();
                jo.put("status", 1);
                ja.add(index++, jo);
            } else {//tiada data notes
                JSONObject jo = new JSONObject();
                jo.put("status", 0);
                ja.add(index++, jo);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return ja;
    }
}
